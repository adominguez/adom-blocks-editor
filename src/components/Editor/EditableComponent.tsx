/* eslint-disable no-unsafe-optional-chaining */
import { useCallback, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact, RenderElementProps, RenderLeafProps } from "slate-react";
import { withEmbeds, withLinks } from "@/plugins/editor";
import { withHistory } from "slate-history";
import { EditableComponentState, EditableComponentProps, CustomEditorInterface, CustomLeafProps } from './types';
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
import { AlignTextProps, DefaultElementProps, HeadingElementProps, CodeElementProps } from "./elements/types";
import FocusedToolbarComponent from "@/components/FocusedToolbar/FocusedToolbarComponent";


const EditableComponent = (props: EditableComponentProps) => {
  const { block, editing, hideToolbar, key, index, onFocus, onChange } = props;
  const [editor] = useState<EditableComponentState['editor']>(() =>
    withLinks(withHistory(withEmbeds(withReact(createEditor())))) as CustomEditorInterface
  );

  const renderElement = useCallback((props: RenderElementProps) => {
    const properties = props as DefaultElementProps | AlignTextProps | HeadingElementProps | CodeElementProps;
    switch (properties.element.type) {
      case "code":
        return <CodeElement {...properties} />;
        case "alignLeft":
          return <AlignText {...properties} className="text-left" />;
      case "alignRight":
        return <AlignText {...properties} className="text-right" />;
      case "alignCenter":
        return <AlignText {...properties} className="text-center" />;
      // case "link":
      //   return <LinkElement {...props} />;
      // case "youtube":
      //   return <YoutubeElement {...props} />;
      case "heading":
        return <HeadingElement {...properties} />;
      // case "quote":
      //   return <QuoteElement {...props} />;
      default:
        return <DefaultElement {...properties} />;
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props as CustomLeafProps} />, []);

  return (
    <>
      {editing && !hideToolbar ? (
        <FocusedToolbarComponent
          key={`toolbar-${key}`}
          index={index}
          editor={editor}
        />
      ) : null}
      <Slate
        editor={editor}
        initialValue={block}
        onChange={(value) => {
          const isAstChange = editor.operations.some(
            (op) => op.type !== "set_selection"
          );
          if (isAstChange && onChange) {
            onChange(value);
          }
        }}
      >
        <Editable
          placeholder="teclea/para elegir un bloque"
          className="w-full py-1 pt-2 border-b border-transparent outline-transparent focus:border-t-0 focus:bg-foreground/10 focus:border-b-foreground"
          spellCheck
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onFocus={() => onFocus(index)}
          renderPlaceholder={() => (
            <span
              data-slate-placeholder="true"
              contentEditable="false"
              className="absolute w-full pointer-events-none select-none opacity-30"
            >teclea/para elegir un bloque</span>
          )}
        />
      </Slate>
    </>
  );
};

export default EditableComponent;
