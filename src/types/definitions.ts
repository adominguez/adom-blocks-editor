import {ReactNode} from 'react';

export interface Block {
  key: string;
  block: BlockItem[];
  editing?: boolean;
  hideToolbar?: boolean;
}

export interface BlockItem {
  type: string;
  variant?: string;
  children: { text: string }[];
}

export interface AdomBlocksEditorProps {}

export interface ForwardedEditableComponentProps {
  id: string;
  className?: string;
  // Asegúrate de agregar las propiedades necesarias aquí según EditableComponent
}

export interface LeafProps {
  attributes: any;
  children: React.ReactNode;
  leaf: {
    bold: boolean;
    italic: boolean;
    isAlignLeft: boolean;
    isAlignCenter: boolean;
    isAlignRight: boolean;
  };
}

export interface EmbedRegex {
  regex: RegExp;
  type: string;
}

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'paragraph' | 'span';

export interface TypographyProps {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
  leading?: number;
  [key: string]: any;
}

export interface DefaultElementProps {
  attributes: any;
  children: ReactNode;
}

export interface HeadingElementProps extends DefaultElementProps {
  element: {
    type: string;
    variant: Variant;
  }
}

export interface AlignTextProps extends DefaultElementProps {
  element: Element;
  className: string;
}

export interface DefaultIconProps {
  width?: number;
  height?: number;
  className?: string;
  strokeWidth?: number;
}

export interface ToolbarButtonProps {
  children: ReactNode;
  onMouseDown: (e: React.MouseEvent, editor: any) => void;
  alt: string;
  shortcut: string;
  active?: boolean;
  variant?: string;
  editor: any;
}

export interface FocusedToolbarComponentProps {
  editor: any;
  index: number;
  onUpdateType: (type: any, index: number) => void;
  onRemoveBlock: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}