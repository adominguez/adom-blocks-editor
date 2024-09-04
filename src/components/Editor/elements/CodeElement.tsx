import { CodeElementProps } from "./types";

const CodeElement = ({ attributes, children }: CodeElementProps) => (
  <pre {...attributes} className='p-2 text-card bg-muted-foreground'>
    <code>{children}</code>
  </pre>
);

export default CodeElement;
