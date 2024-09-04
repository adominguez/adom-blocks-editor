/* eslint-disable @typescript-eslint/no-explicit-any */
import { Editor, Element, Transforms, Range } from "slate"

const embedRegex = [
  {
    regex: /https:\/\/www\.youtube\.com\/watch\?v=(\w+)/,
    type: 'youtube',
  }
]

export const withEmbeds = (editor: any) => {
  const { insertData } = editor

  editor.insertData = (data: any) => {
    console.log(data.getData('text/plain'))
    return insertData(data)
  }
  return editor
}

export const withLinks = (editor: Editor) => {
  const { isInline } = editor;

  editor.isInline = (element: any) =>
    element.type === "link" ? true : isInline(element);

  return editor;
};

export const createLinkNode = (href: string, text: string) => ({
  type: "link",
  href,
  children: [{ text }]
});

export const removeLink = (editor: Editor, opts = {}) => {
  Transforms.unwrapNodes(editor, {
    ...opts,
    match: (n: any) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === "link"
  });
};

export const CustomEditor = {
  handleEmbed(editor: Editor, e: any) {
    const text = e.clipboardData.getData('text/plain')
    embedRegex.some(({ regex, type }) => {
      const match = text.match(regex)
      if (match) {
        e.preventDefault()
        const embed = { type, youtubeId: match[1], children: [{ text }] }
        Transforms.insertNodes(editor, embed)
        return true
      }
      return false
    })
  },
  handlePaste(editor: Editor, e: ClipboardEvent) {
    CustomEditor.handleEmbed(editor, e)
  },
  toggleLink(editor: any) {
    if (CustomEditor?.isLinkActive(editor)) {
      removeLink(editor)
    } else {
      const url = window.prompt('Insertar URL del enlace:')
      if (url) {
        const selectedText = Editor.string(editor, editor.selection)
        const linkText = selectedText ? selectedText : 'Texto del enlace'
        CustomEditor.handleLink(editor, url, linkText)
      }
    }
  },
  handleLink(editor: Editor, url: string, linkText: string) {
    console.log(linkText)
    if (!url) return;

    const { selection } = editor;
    const link = createLinkNode(url, url);
  
    if (selection) {
      const [parentNode] = Editor.parent(
        editor,
        selection.focus?.path
      );
  
      // Remove the Link node if we're inserting a new link node inside of another
      // link.
      if (parentNode.type === "link") {
        removeLink(editor);
      }
  
      if (Range.isCollapsed(selection)) {
        // Insert the new link in our last known location
        Transforms.insertNodes(editor, link, { select: true });
      } else {
        // Wrap the currently selected range of text into a Link
        Transforms.wrapNodes(editor, link, { split: true });
        // Remove the highlight and move the cursor to the end of the highlight
        Transforms.collapse(editor, { edge: "end" });
      }
    }
  },
  isLinkActive(editor: any) {
    const [link] = Editor.nodes(editor, {
      match: (n) => n.type === 'link',
    });
    return !!link;
  },
  isBoldMarkActive(editor: any) {
    const marks = Editor.marks(editor)
    return !!marks?.bold
  },
  isItalicMarkActive(editor: any) {
    const marks = Editor.marks(editor)
    return !!marks?.italic
  },
  isAlignLeft(editor: any) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'alignLeft'
    })
    return !!match
  },
  isAlignCenter(editor: any) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'alignCenter'
    })
    return !!match
  },
  isAlignRight(editor: any) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'alignRight'
    })
    return !!match
  },
  isCodeBlockActive(editor: any) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'code'
    })
    return !!match
  },
  toggleBoldMark(editor: Editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor)
    if (isActive) {
      Editor.removeMark(editor, 'bold')
    } else {
      Editor.addMark(editor, 'bold', true)
    }
  },
  toggleItalicMark(editor: Editor) {
    const isActive = CustomEditor.isItalicMarkActive(editor)
    if (isActive) {
      Editor.removeMark(editor, 'italic')
    } else {
      Editor.addMark(editor, 'italic', true)
    }
  },
  toggleAlignLeftMark(editor: any) {
    const isActive = CustomEditor.isAlignLeft(editor)
    Transforms.setNodes(editor, { type: isActive ? null : 'alignLeft' },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) })
  },
  toggleAlignCenterMark(editor: any) {
    const isActive = CustomEditor.isAlignCenter(editor)
    Transforms.setNodes(editor, { type: isActive ? null : 'alignCenter' },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) })
  },
  toggleAlignRightMark(editor: any) {
    const isActive = CustomEditor.isAlignRight(editor)
    Transforms.setNodes(editor, { type: isActive ? null : 'alignRight' },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) })
  },
  toggleCodeBlock(editor: any) {
    const isActive = CustomEditor.isCodeBlockActive(editor)
    Transforms.setNodes(editor, { type: isActive ? null : 'code' },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) })
  }
}