import { FC } from "react";
import { DefaultElementProps } from "@/types/definitions";


const CodeElement: FC<DefaultElementProps> = ({ attributes, children }) => (
  <pre {...attributes} className='p-2 text-card bg-muted-foreground'>
    <code>{children}</code>
  </pre>
);

export default CodeElement;
