import React, { forwardRef, Ref } from "react";
import { TypographyProps } from "@/types/definitions";

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'paragraph' | 'span';

const POSSIBLE_VARIANTS: Variant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'paragraph', 'span'];

const INITIAL_CLASSES: Record<Variant, string> = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  h5: 'scroll-m-20 text-l font-semibold tracking-tight',
  h6: 'scroll-m-20 text-l tracking-tighter',
  p: '[&:not(:first-child)]:mt-6',
  paragraph: '[&:not(:first-child)]:mt-6',
  span: '',
};

const Typography = forwardRef(function Typography(
  { variant = 'paragraph', className, children, leading, ...rest }: TypographyProps,
  ref: Ref<HTMLParagraphElement>
) {
  const getType = () => {
    const isPossible = POSSIBLE_VARIANTS.find((item) => variant.toLowerCase() === item) ?? 'paragraph';
    return !isPossible || isPossible === 'paragraph' ? 'p' : variant;
  };

  const type = getType();

  const template = React.createElement(
    type,
    {
      ...rest,
      ref,
      className: `${INITIAL_CLASSES[type]}${className ? ` ${className}` : ''}${type === 'p' && leading ? ` leading-${leading}` : ''}`,
    },
    children
  );
  return template;
});

export default Typography;
