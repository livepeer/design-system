import {
  TabsTrigger as TabsTriggerBase,
  TabsContent as TabsContentBase,
  TabsList as TabsListBase,
} from "@modulz/design-system";
import { styled } from "../stitches.config";

export { Tabs } from "@modulz/design-system";

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
