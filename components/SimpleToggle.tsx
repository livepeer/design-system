import { styled } from "../stitches.config";
import * as TogglePrimitive from "@radix-ui/react-toggle";

export const SimpleToggle = styled(TogglePrimitive.Root, {
  // Reset
  alignItems: "center",
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  fontFamily: "inherit",
  fontSize: "14px",
  justifyContent: "center",
  lineHeight: "1",
  outline: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  color: "$hiContrast",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },
  height: "$5",
  width: "$5",
  backgroundColor: "transparent",
  "@hover": {
    "&:hover": {
      backgroundColor: "$neutralA3",
    },
  },
  "&:active": {
    backgroundColor: "$neutralA4",
  },
  "&:focus": {
    boxShadow: "inset 0 0 0 1px $neutralA8, 0 0 0 1px $neutralA8",
    zIndex: 1,
  },

  '&[data-state="on"]': {
    backgroundColor: "$neutralA5",
    "@hover": {
      "&:hover": {
        backgroundColor: "$neutralA5",
      },
    },
    "&:active": {
      backgroundColor: "$neutralA7",
    },
  },

  variants: {
    shape: {
      circle: {
        borderRadius: "$round",
      },
      square: {
        borderRadius: "$1",
      },
    },
  },
});
