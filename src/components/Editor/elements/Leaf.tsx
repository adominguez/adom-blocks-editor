import { FC } from "react";
import { LeafProps } from "@/types/definitions";

const Leaf: FC<LeafProps> = ({ attributes, children, leaf }) => (
  <span
    {...attributes}
    className={`${leaf.bold ? "font-bold" : ""} ${leaf.italic ? "italic" : ""}
      ${leaf.isAlignLeft ? "text-left" : ""} ${
      leaf.isAlignCenter ? "text-center" : ""
    } ${leaf.isAlignRight ? "text-right" : ""}`}
  >
    {children}
  </span>
);

export default Leaf;
