"use client";
import { useState } from "react";
import { ArrowMoveUpIcon, ArrowMoveDownIcon } from "@/lib/icons";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
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
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import "globalthis/polyfill";
import {
  FocusedToolbarComponentProps,
  FocusedToolbarComponentState,
} from "./types";
import { TOOLBAR_BUTTONS } from "./constants";
import { ToolbarButton } from "./types";

const sortedParentData = TOOLBAR_BUTTONS.filter((item) => !item.parent).sort(
  (a, b) => a.sort - b.sort
);

const sortedChildrenData = (toolbarButton: ToolbarButton) => TOOLBAR_BUTTONS.filter((item) => item.parent === toolbarButton.id).sort(
  (a, b) => a.sort - b.sort
);

const FocusedToolbarComponent = ({
  key,
  index,
  editor,
}: FocusedToolbarComponentProps) => {
  const [view, setView] = useState<FocusedToolbarComponentState["view"]>();
  return (
    <div className="relative">
      <Alert className="absolute z-10 p-2 bg-secondary-foreground -top-10">
        <AlertDescription className="flex gap-3">
          <div className="flex items-center gap-1">
            <Button size="supermini">
              <ArrowMoveUpIcon />
            </Button>
            <Button size="supermini">
              <ArrowMoveDownIcon />
            </Button>
          </div>
          <Menubar>
            {sortedParentData.map((parent) => (
              <MenubarMenu key={parent.id}>
                <MenubarTrigger onClick={(e) => {
                  if (sortedChildrenData(parent).length > 0) {
                    e.preventDefault();
                  } else {
                    alert('hace cosas');
                  }
                }}>{parent.icon}</MenubarTrigger>
                {
                  sortedChildrenData(parent).length > 0 && (
                    <MenubarContent>
                      {sortedChildrenData(parent).map((child) => (
                        <MenubarItem key={child.id}>
                          {child.icon} {child.alt} {
                            child.shortcut && (
                              <MenubarShortcut>{child.shortcut}</MenubarShortcut>
                            )
                          }
                        </MenubarItem>
                      ))}
                    </MenubarContent>
                  )
                }
              </MenubarMenu>
            ))}
          </Menubar>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default FocusedToolbarComponent;
