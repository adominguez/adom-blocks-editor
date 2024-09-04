import { ReactNode } from "react";

export interface FocusedToolbarComponentProps {
  editor: any,
  index: number,
  key: string,
}

type PossibleToolbarViews = 'minimized' | 'expanded' | 'hidden'

export interface FocusedToolbarComponentState {
  view: PossibleToolbarViews,
}

interface ToolbarButton {
  sort: number,
  id: string,
  icon: ReactNode,
  alt: string,
  shortcut?: string,
  parent?: string,
  // isActive?: boolean,
  // onMouseDown: (e: React.MouseEvent, editor:Editor) => void
}