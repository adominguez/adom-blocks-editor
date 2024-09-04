/* eslint-disable @typescript-eslint/no-explicit-any */
import {ReactNode} from 'react';
import { BaseEditor, Descendant, Editor, Element } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'paragraph' | 'span';

export interface AdomBlocksEditorProps {}

export interface BlockValue extends Element {
  type: string;
  variant?: Variant;
  children: { text: string }[];
}

export interface Block {
  key: string;
  hideToolbar: boolean;
  block: BlockValue[];
  editing: boolean;
}

export interface UseBlockState  {
  blocks: Block[];
}

export interface ForwardedEditableComponentProps {
  id: string;
  className?: string;
  // Asegúrate de agregar las propiedades necesarias aquí según EditableComponent
}

export interface CustomEditorInterface extends Editor, ReactEditor, HistoryEditor, BaseEditor {
  handleEmbed: (editor: Editor, e: ClipboardEvent) => void;
  handlePaste: (editor: Editor, e: ClipboardEvent) => void;
  handleLink: (editor: Editor, url: string, linkText: string) => void;
  toggleLink: (editor: Editor) => void;
  isLinkActive: (editor: Editor) => boolean;
  isBoldActive: (editor: Editor) => boolean;
  isBoldMarkActive: (editor: Editor) => boolean;
  isItalicMarkActive: (editor: Editor) => boolean;
  isAlignLeft: (editor: Editor) => boolean;
  isAlignCenter: (editor: Editor) => boolean;
  isAlignRight: (editor: Editor) => boolean;
  isCodeBlockActive: (editor: Editor) => boolean;
  toggleBoldMark: (editor: Editor) => void;
  toggleItalicMark: (editor: Editor) => void;
  toggleAlignLeftMark: (editor: Editor) => void;
  toggleAlignCenterMark: (editor: Editor) => void;
  toggleAlignRightMark: (editor: Editor) => void;
  toggleCodeBlock: (editor: Editor) => void;
}

export interface EmbedRegex {
  regex: RegExp;
  type: string;
}

export interface TypographyProps {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
  leading?: number;
}

export interface DefaultIconProps {
  width?: number;
  height?: number;
  className?: string;
  strokeWidth?: number;
}

export interface ToolbarButtonProps {
  children: ReactNode;
  onMouseDown: (e: React.MouseEvent, editor: CustomEditorInterface) => void;
  alt: string;
  shortcut: string;
  active?: boolean;
  variant?: string;
  editor: CustomEditorInterface;
}

export interface FocusedToolbarComponentProps {
  editor: CustomEditorInterface;
  index: number;
  onUpdateType: (type: any, index: number) => void;
  onRemoveBlock: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}