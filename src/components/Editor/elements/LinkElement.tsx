import { useSlateStatic } from "slate-react";
import { ExternalLinkIcon, UnlinkIcon } from '@/lib/icons';
import { removeLink } from "../plugins/editor";
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const LinkElement = ({ attributes, element, children }) => {
  const editor = useSlateStatic();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <a {...attributes} href={element.href} className="underline">
          {children}
        </a>
      </PopoverTrigger>
      <PopoverContent className="flex items-center w-auto gap-2 px-2 py-1 bg-foreground text-muted" contentEditable={false}>
        <a href={element.href} rel="noreferrer" target="_blank" className="flex items-center gap-1 pr-2 border-r border-foreground">
          <ExternalLinkIcon />
          {element.href}
        </a>
        <Button size="supermini" onClick={() => removeLink(editor)}>
          <UnlinkIcon />
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default LinkElement;