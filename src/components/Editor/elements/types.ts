import { ReactNode } from 'react';
import { RenderElementProps } from 'slate-react';
import { Variant } from '@/types/definitions';

export type typesOfElements = 'alignText' | 'heading' | 'link' | 'quote' | 'code' | 'youtube';

export interface ElementProps {
  type: string;
  variant?: Variant;
  href?: string;
}

export interface DefaultElementProps extends RenderElementProps {
  children: ReactNode;
  className?: string;
  element: RenderElementProps['element'] & ElementProps
}

export interface AlignTextProps extends DefaultElementProps {
  element: RenderElementProps['element'] & ElementProps
}

export interface HeadingElementProps extends DefaultElementProps {
  element: RenderElementProps['element'] & ElementProps
}

export interface LinkElementProps extends DefaultElementProps {
  element: RenderElementProps['element'] & ElementProps
}

export interface QuoteElementProps extends DefaultElementProps {
  element: RenderElementProps['element'] & ElementProps
}

export interface CodeElementProps extends DefaultElementProps {
  element: RenderElementProps['element'] & ElementProps
}

export interface YoutubeElementProps extends DefaultElementProps {
  element: RenderElementProps['element'] & ElementProps & {
    youtubeId: string;
  }
}