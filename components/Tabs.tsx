import React from "react";
import { styled, CSS } from "../stitches.config";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Separator } from "./Separator";

export const Tabs = styled(TabsPrimitive.Root, {
  display: "flex",
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
  },
});

const TabsTriggerBase = styled(TabsPrimitive.Trigger, {
  flexShrink: 0,
  height: "$5",
  display: "inline-flex",
  lineHeight: 1,
  fontSize: "$1",
  px: "$2",
  userSelect: "none",
  outline: "none",
  alignItems: "center",
  justifyContent: "center",
  color: "$neutral11",
  border: "1px solid transparent",
  borderTopLeftRadius: "$2",
  borderTopRightRadius: "$2",
  zIndex: "10",

  "@hover": {
    "&:hover": {
      color: "$hiContrast",
    },
  },

  '&[data-state="active"]': {
    color: "$hiContrast",
    borderColor: "$neutral6",
    borderBottomColor: "transparent",
  },

  '&[data-orientation="vertical"]': {
    justifyContent: "flex-start",
    borderTopRightRadius: 0,
    borderBottomLeftRadius: "$2",
    borderBottomColor: "transparent",

    '&[data-state="active"]': {
      borderBottomColor: "$neutral6",
      borderRightColor: "transparent",
    },
  },
});

const StyledTabsListBase = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px $neutral8, 0 0 0 1px $neutral8",
  },
  '&[data-orientation="vertical"]': {
    flexDirection: "column",
    boxShadow: "inset -1px 0 0 $neutral6",
  },
});

type TabsListPrimitiveProps = React.ComponentProps<typeof TabsPrimitive.List>;
type TabsListProps = TabsListPrimitiveProps & { css?: CSS };

const TabsListBase = React.forwardRef<
  React.ElementRef<typeof StyledTabsListBase>,
  TabsListProps
>((props, forwardedRef) => (
  <>
    <StyledTabsListBase {...props} ref={forwardedRef} />
    <Separator />
  </>
));

TabsListBase.displayName = "TabsListBase";

const TabsContentBase = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px $neutral8, 0 0 0 1px $neutral8",
  },
});

export const TabsTrigger = styled(TabsTriggerBase, {
  color: "$neutral11",
  bc: "transparent",
  '&[data-state="active"]': {
    borderColor: "$neutral6",
  },

  '&[data-orientation="vertical"]': {
    '&[data-state="active"]': {
      color: "$hiContrast",
      borderColor: "$neutral6",
      borderBottomColor: "transparent",
    },
  },
  '&[data-orientation="horizontal"]': {
    '&[data-state="active"]': {
      color: "$hiContrast",
      borderColor: "$neutral6",
      borderBottomColor: "transparent",
    },
  },
});

export const TabsList = styled(TabsListBase, {
  "&:focus": {
    boxShadow: "inset 0 0 0 1px $neutral8, 0 0 0 1px $neutral8",
  },
  '&[data-orientation="vertical"]': {
    boxShadow: "inset -1px 0 0 $neutral6",
  },
});

export const TabsContent = styled(TabsContentBase, {
  "&:focus": {
    boxShadow: "inset 0 0 0 1px $neutral8, 0 0 0 1px $neutral8",
  },
});
