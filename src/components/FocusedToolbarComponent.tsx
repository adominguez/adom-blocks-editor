"use client";
import { forwardRef, FC } from "react";
import {
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  SaveIcon,
  CodeIcon,
  ParagraphIcon,
  AlignLeftIcon,
  PhotoIcon,
  HeadingIcon,
  HeadingH1Icon,
  HeadingH2Icon,
  HeadingH3Icon,
  HeadingH4Icon,
  AlignCenterIcon,
  AlignRightIcon,
  HeadingH5Icon,
  HeadingH6Icon,
  ArrowMoveUpIcon,
  ArrowMoveDownIcon,
  TrashIcon,
  QuoteIcon,
} from "@/lib/icons";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CustomEditor } from "@/plugins/editor";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CommandShortcut } from "@/components/ui/command";
import "globalthis/polyfill";
import {
  FocusedToolbarComponentProps,
  ToolbarButtonProps,
} from "@/types/definitions";

const userAgent = globalThis?.navigator?.userAgent;
const isMac = userAgent?.indexOf("Mac") !== -1;

const TOOLBAR_BUTTONS = [
  {
    id: "bold",
    icon: <BoldIcon />,
    alt: "Negrita",
    shortcut: `${isMac ? "⌘" : "Ctrl"}B`,
    isActive: (editor) => CustomEditor?.isBoldMarkActive(editor),
    onMouseDown: (e, editor) => {
      e.preventDefault();
      CustomEditor.toggleBoldMark(editor);
    },
  },
  {
    id: "italic",
    icon: <ItalicIcon />,
    alt: "Cursiva",
    shortcut: `${isMac ? "⌘" : "Ctrl"}I`,
    isActive: (editor) => CustomEditor?.isItalicMarkActive(editor),
    onMouseDown: (e, editor) => {
      e.preventDefault();
      CustomEditor.toggleItalicMark(editor);
    },
  },
  {
    id: "align-left",
    icon: <AlignLeftIcon />,
    alt: "Alineación izquierda",
    shortcut: `${isMac ? "⌘" : "Ctrl"}L`,
    isActive: (editor) => CustomEditor?.isAlignLeft(editor),
    onMouseDown: (e, editor) => {
      e.preventDefault();
      CustomEditor.toggleAlignLeftMark(editor);
    },
  },
  {
    id: "align-center",
    icon: <AlignCenterIcon />,
    alt: "Alineación centrada",
    shortcut: `${isMac ? "⌘" : "Ctrl"}E`,
    isActive: (editor) => CustomEditor?.isAlignCenter(editor),
    onMouseDown: (e, editor) => {
      e.preventDefault();
      CustomEditor.toggleAlignCenterMark(editor);
    },
  },
  {
    id: "align-right",
    icon: <AlignRightIcon />,
    alt: "Alineación derecha",
    shortcut: `${isMac ? "⌘" : "Ctrl"}R`,
    isActive: (editor) => CustomEditor?.isAlignRight(editor),
    onMouseDown: (e, editor) => {
      e.preventDefault();
      CustomEditor.toggleAlignRightMark(editor);
    },
  },
  {
    id: "link",
    icon: <LinkIcon />,
    alt: "Enlace",
    shortcut: `${isMac ? "⌘" : "Ctrl"}K`,
    isActive: (editor) => CustomEditor?.isLinkActive(editor),
    onMouseDown: (e, editor) => {
      e.preventDefault();
      CustomEditor.toggleLink(editor);
    },
  },
  {
    id: "photo",
    icon: <PhotoIcon />,
    alt: "Imagen",
    shortcut: `${isMac ? "⌘" : "Ctrl"}K`,
    isActive: (editor) => CustomEditor?.isLinkActive(editor),
    onMouseDown: (e, editor) => {
      e.preventDefault();
      CustomEditor.toggleLink(editor);
    },
  },
  {
    id: "code",
    icon: <CodeIcon />,
    alt: "Bloque de código",
    shortcut: `${isMac ? "⌘" : "Ctrl"}H`,
    isActive: (editor) => CustomEditor?.isCodeBlockActive(editor),
    onMouseDown: (e, editor) => {
      e.preventDefault();
      CustomEditor.toggleCodeBlock(editor);
    },
  },
  {
    id: "save",
    icon: <SaveIcon />,
    alt: "Guardar",
    onMouseDown: (e, editor) => {
      e.preventDefault();
      console.log(editor.children);
    },
  },
];

const TYPES_BUTTONS = [
  {
    id: "paragraph",
    icon: <ParagraphIcon />,
  },
  {
    id: "h1",
    icon: <HeadingH1Icon />,
  },
  {
    id: "h2",
    icon: <HeadingH2Icon />,
  },
  {
    id: "h3",
    icon: <HeadingH3Icon />,
  },
  {
    id: "h4",
    icon: <HeadingH4Icon />,
  },
  {
    id: "h5",
    icon: <HeadingH5Icon />,
  },
  {
    id: "h6",
    icon: <HeadingH6Icon />,
  },
  {
    id: "heading",
    icon: <HeadingIcon />,
  },
  {
    id: "quote",
    icon: <QuoteIcon />,
  },
];

const EXTENSION_BUTTONS = [
  {
    variant: "h1",
    type: "heading",
    text: "H1 Heading",
  },
  {
    variant: "h2",
    type: "heading",
    text: "H2 Heading",
  },
  {
    variant: "h3",
    type: "heading",
    text: "H3 Heading",
  },
  {
    variant: "h4",
    type: "heading",
    text: "H4 Heading",
  },
  {
    variant: "h5",
    type: "heading",
    text: "H5 Heading",
  },
  {
    variant: "h6",
    type: "heading",
    text: "H6 Heading",
  },
  {
    type: "paragraph",
    variant: "paragraph",
    text: "Paragrapgh",
  },
  {
    type: "quote",
    variant: "quote",
    text: "Quote",
  },
];

const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  (
    {
      children,
      onMouseDown,
      alt,
      shortcut,
      active,
      variant = "outline",
      editor,
    },
    ref
  ) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              ref={ref}
              variant={variant}
              size="mini"
              className={`${
                active ? "opacity-100" : "opacity-60"
              } hover:opacity-80`}
              onMouseDown={(e) => onMouseDown(e, editor)}
            >
              {children}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="flex items-center justify-between gap-1">
            <span>{alt}</span>
            <CommandShortcut>{shortcut}</CommandShortcut>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
);

const FocusedToolbarComponent: FC<FocusedToolbarComponentProps> = ({
  editor,
  index,
  onUpdateType,
  onRemoveBlock,
  onMoveUp,
  onMoveDown,
}) => (
  <Alert className="absolute p-2 bg-secondary-foreground -top-14">
    <AlertDescription className="flex gap-3">
      <div className="flex items-center gap-1">
        <Button size="supermini" onMouseDown={() => onMoveUp(index)}>
          <ArrowMoveUpIcon />
        </Button>
        <Button size="supermini" onMouseDown={() => onMoveDown(index)}>
          <ArrowMoveDownIcon />
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <HoverCard openDelay={0}>
          <HoverCardTrigger asChild>
            <Button size="mini">
              {
                TYPES_BUTTONS.find(
                  (item) =>
                    item.id === editor.children[0].variant ||
                    item.id === editor.children[0].type
                )?.icon
              }
            </Button>
          </HoverCardTrigger>
          <HoverCardContent sideOffset={10} className="bg-secondary-foreground">
            {EXTENSION_BUTTONS.map(({ variant, type, text }) => (
              <Button
                key={variant}
                onMouseDown={() => onUpdateType({ type, variant }, index)}
                className="w-full text-left"
              >
                {text}
              </Button>
            ))}
          </HoverCardContent>
        </HoverCard>
        {TOOLBAR_BUTTONS.map(
          ({ id, icon, isActive = () => false, ...props }) => (
            <ToolbarButton
              active={isActive(editor)}
              key={id}
              editor={editor}
              {...props}
            >
              {icon}
            </ToolbarButton>
          )
        )}
      </div>
      <div className="flex items-center gap-1">
        <ToolbarButton
          editor={editor}
          alt="Eliminar bloque"
          shortcut={`${isMac ? "⌘" : "Ctrl"}D`}
          variant="destructive"
          onMouseDown={() => onRemoveBlock()}
        >
          <TrashIcon />
        </ToolbarButton>
      </div>
    </AlertDescription>
  </Alert>
);

export default FocusedToolbarComponent;
