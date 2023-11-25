/* eslint-disable no-unsafe-optional-chaining */
import { useCallback, useState, useEffect, FC } from "react";
import { createEditor, Transforms, Range } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withEmbeds, withLinks, CustomEditor } from "@/plugins/editor";
import { withHistory } from "slate-history";
import FocusedToolbarComponent from "@/components/FocusedToolbarComponent";
import {
  AlignText,
  CodeElement,
  DefaultElement,
  HeadingElement,
  Leaf,
  // LinkElement,
  // QuoteElement,
  // YoutubeElement,
} from "@/components/Editor/elements";

interface EditableComponentProps {
  initialValue: any;
  editing: boolean;
  hideToolbar: boolean;
  onEnter: (index: number) => void;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: any) => void;
  onArrowUp: (index: number) => void;
  onArrowDown: (index: number) => void;
  onRemoveBlock: (index: number) => void;
  callbackEditor: (editor: any) => void;
  index: number;
  onUpdateType: (type: string, index: number, editor: any) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

const EditableComponent: FC<EditableComponentProps> = (props) => {
  const {
    initialValue,
    editing,
    hideToolbar,
    onEnter,
    onFocus,
    onBlur,
    onChange,
    onArrowUp,
    onArrowDown,
    onRemoveBlock,
    callbackEditor,
    index,
    onUpdateType,
    onMoveUp,
    onMoveDown,
  } = props;

  const [editor] = useState(() =>
    withLinks(withHistory(withEmbeds(withReact(createEditor()))))
  );

  const [toolbarKey, setToolbarkKey] = useState(() => Date.now());

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
        case "alignLeft":
          return <AlignText {...props} className="text-left" />;
      case "alignRight":
        return <AlignText {...props} className="text-right" />;
      case "alignCenter":
        return <AlignText {...props} className="text-center" />;
      // case "link":
      //   return <LinkElement {...props} />;
      // case "youtube":
      //   return <YoutubeElement {...props} />;
      case "heading":
        return <HeadingElement {...props} />;
      // case "quote":
      //   return <QuoteElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  useEffect(() => {
    callbackEditor(editor);
  }, []);

  return (
    <>
      {editing && !hideToolbar ? (
        <FocusedToolbarComponent
          key={toolbarKey}
          index={index}
          editor={editor}
          onRemoveBlock={() => onRemoveBlock(index)}
          onUpdateType={(type: string, index: number) =>
            onUpdateType(type, index, editor)
          }
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
        />
      ) : null}
      <Slate
        editor={editor}
        initialValue={initialValue}
        onChange={(value) => {
          const isAstChange = editor.operations.some(
            (op) => op.type !== "set_selection"
          );
          if (isAstChange) {
            onChange(value);
          }
        }}
      >
        <Editable
          placeholder="teclea/para elegir un bloque"
          className="w-full py-1 pt-2 border-b border-transparent outline-transparent focus:border-t-0 focus:bg-foreground/10 focus:border-b-foreground"
          style={{
            position: "initial",
          }}
          spellCheck
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={(e) => {
            const { key, ctrlKey } = e;
            const [child] = editor.children[0].children;
            if (key === "Enter" && e.shiftKey) {
              e.preventDefault();
              Transforms.insertText(editor, "\n");
            }
            if (key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (child.text) {
                onEnter(index);
              }
            }
            if (key === "ArrowUp") {
              if (
                editor.selection &&
                Range.start(editor.selection).offset === 0
              ) {
                onArrowUp(index);
              }
            }
            if (key === "ArrowDown") {
              if (editor.selection) {
                const [lastBlock] =
                  editor?.children[editor?.children.length - 1]?.children;
                if (lastBlock?.text) {
                  if (
                    Range.end(editor.selection).offset === child.text?.length
                  ) {
                    onArrowDown(index);
                  }
                }
              }
            }
            if (key === "Backspace") {
              const [lastBlock] =
                editor?.children[editor?.children.length - 1]?.children;
              if (!lastBlock?.text) {
                onRemoveBlock(index);
              }
            }
            if (!ctrlKey && !e.metaKey) {
              return;
            }
            switch (key) {
              case "`": {
                e.preventDefault();
                CustomEditor.toggleCodeBlock(editor);
                return;
              }
              case "b": {
                e.preventDefault();
                CustomEditor.toggleBoldMark(editor);
                return;
              }
              case "i": {
                e.preventDefault();
                CustomEditor.toggleItalicMark(editor);
                return;
              }
              case "l": {
                e.preventDefault();
                CustomEditor.toggleAlignLeftMark(editor);
                return;
              }
              case "e": {
                e.preventDefault();
                CustomEditor.toggleAlignCenterMark(editor);
                return;
              }
              case "r": {
                e.preventDefault();
                CustomEditor.toggleAlignRightMark(editor);
                return;
              }
              case "k": {
                e.preventDefault();
                CustomEditor.toggleLink(editor);
                return;
              }
              case "d": {
                e.preventDefault();
                onRemoveBlock(index);
                return;
              }
            }
          }}
          onFocus={onFocus}
          onChange={(value) => console.log(value)}
          onBlur={onBlur}
          onSelect={() => {
            setToolbarkKey(Date.now());
          }}
          onPaste={(e) => CustomEditor.handlePaste(editor, e)}
        />
      </Slate>
    </>
  );
};

export default EditableComponent;
