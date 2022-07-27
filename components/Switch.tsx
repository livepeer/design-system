import { Switch as SwitchBase } from "@modulz/design-system";
import { styled } from "../stitches.config";

export const Switch = styled(SwitchBase, {
  bc: "$neutral5",
  "&:focus": {
    boxShadow: "0 0 0 2px $colors$neutral8",
  },
  '&[data-state="checked"]': {
    bc: "$primary9",
    "&:focus": {
      boxShadow: "0 0 0 2px $colors$primary8",
    },
  },
});
