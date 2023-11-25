import { Editor, Element, Transforms, Range, BaseEditor } from "slate";
import { EmbedRegex } from '@/types/definitions';

const embedRegex: EmbedRegex[] = [
  {
    regex: /https:\/\/www\.youtube\.com\/watch\?v=(\w+)/,
    type: 'youtube',
  }
];

export const withEmbeds = (editor: BaseEditor): BaseEditor => {
  const { insertData } = editor;

  editor.insertData = (data: DataTransfer) => {
    console.log(data.getData('text/plain'));
    return insertData(data);
  };

  return editor;
};

export const withLinks = (editor: BaseEditor): BaseEditor => {
  const { isInline } = editor;

  editor.isInline = (element: Element) =>
    element.type === "link" ? true : isInline(element);

  return editor;
};

export const createLinkNode = (href: string, text: string): Element => ({
  type: "link",
  href,
  children: [{ text }]
});

export const removeLink = (editor: BaseEditor, opts: any = {}): void => {
  Transforms.unwrapNodes(editor, {
    ...opts,
    match: (n: BaseEditor) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === "link"
  });
};

export const CustomEditor = {
  handleEmbed(editor: Editor, e: ClipboardEvent): void {
    const text = e.clipboardData.getData('text/plain');
    embedRegex.some(({ regex, type }) => {
      const match = text.match(regex);
      if (match) {
        e.preventDefault();
        const embed = { type, youtubeId: match[1], children: [{ text }] };
        Transforms.insertNodes(editor, embed);
        return true;
      }
      return false;
    });
  },

  handlePaste(editor: Editor, e: ClipboardEvent): void {
    CustomEditor.handleEmbed(editor, e);
  },

  toggleLink(editor: Editor): void {
    if (CustomEditor?.isLinkActive(editor)) {
      removeLink(editor);
    } else {
      const url = window.prompt('Insertar URL del enlace:');
      if (url) {
        const selectedText = Editor.string(editor, editor.selection);
        const linkText = selectedText ? selectedText : 'Texto del enlace';
        CustomEditor.handleLink(editor, url, linkText);
      }
    }
  },

  handleLink(editor: Editor, url: string, linkText: string): void {
    if (!url) return;

    const { selection } = editor;
    const link = createLinkNode(url, linkText);

    if (selection) {
      const [parentNode] = Editor.parent(
        editor,
        selection.focus?.path || []
      );

      if (parentNode.type === "link") {
        removeLink(editor);
      }

      if (Range.isCollapsed(selection)) {
        Transforms.insertNodes(editor, link, { select: true });
      } else {
        Transforms.wrapNodes(editor, link, { split: true });
        Transforms.collapse(editor, { edge: "end" });
      }
    }
  },

  isLinkActive(editor: Editor): boolean {
    const [link] = Editor.nodes(editor, {
      match: (n) => n.type === 'link',
    });
    return !!link;
  },

  isBoldMarkActive(editor: Editor): boolean {
    const marks = Editor.marks(editor);
    return !!marks?.bold;
  },

  isItalicMarkActive(editor: Editor): boolean {
    const marks = Editor.marks(editor);
    return !!marks?.italic;
  },

  isAlignLeft(editor: Editor): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'alignLeft'
    });
    return !!match;
  },

  isAlignCenter(editor: Editor): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'alignCenter'
    });
    return !!match;
  },

  isAlignRight(editor: Editor): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'alignRight'
    });
    return !!match;
  },

  isCodeBlockActive(editor: Editor): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === 'code'
    });
    return !!match;
  },

  toggleBoldMark(editor: Editor): void {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, 'bold');
    } else {
      Editor.addMark(editor, 'bold', true);
    }
  },

  toggleItalicMark(editor: Editor): void {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, 'italic');
    } else {
      Editor.addMark(editor, 'italic', true);
    }
  },

  toggleAlignLeftMark(editor: Editor): void {
    const isActive = CustomEditor.isAlignLeft(editor);
    Transforms.setNodes(editor, { type: isActive ? null : 'alignLeft' },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) });
  },

  toggleAlignCenterMark(editor: Editor): void {
    const isActive = CustomEditor.isAlignCenter(editor);
    Transforms.setNodes(editor, { type: isActive ? null : 'alignCenter' },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) });
  },

  toggleAlignRightMark(editor: Editor): void {
    const isActive = CustomEditor.isAlignRight(editor);
    Transforms.setNodes(editor, { type: isActive ? null : 'alignRight' },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) });
  },

  toggleCodeBlock(editor: Editor): void {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(editor, { type: isActive ? null : 'code' },
      { match: (n) => Element.isElement(n) && Editor.isBlock(editor, n) });
  }
};
