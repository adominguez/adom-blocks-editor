import { Block } from "@/types/definitions";
import { BaseEditor, Descendant, Editor } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor, RenderLeafProps } from "slate-react";

export type CustomEditorInterface = Editor & ReactEditor & HistoryEditor & BaseEditor;

export interface EditableComponentProps extends Block {
  index: number;
  // onEnter: (index: number) => void;
  onFocus: (index: number) => void;
  // onBlur: () => void;
  onChange?: ((value: Descendant[]) => void) 
  // onArrowUp: (index: number) => void;
  // onArrowDown: (index: number) => void;
  // onRemoveBlock: (index: number) => void;
  // callbackEditor: (editor: any) => void;
  // onUpdateType: (type: string, index: number, editor: any) => void;
  // onMoveUp: (index: number) => void;
  // onMoveDown: (index: number) => void;
}

export interface EditableComponentState {
  editor: CustomEditorInterface
}

interface CustomText {
  text: string;
  bold: boolean;
  italic: boolean;
  isAlignLeft: boolean;
  isAlignCenter: boolean;
  isAlignRight: boolean;
}

export interface CustomLeafProps extends RenderLeafProps {
  children: React.ReactNode;
  leaf: RenderLeafProps['leaf'] & CustomText;
}