import React from 'react';
import Typography from "@/components/Typography/Typography";
import { Element } from 'slate';
import {AlignTextProps} from "@/types/definitions"

const AlignText: React.FC<AlignTextProps> = ({ attributes, children, element, className }) => (
  <Typography variant={element.variant} {...attributes} className={className}>
    {children}
  </Typography>
);

export default AlignText;