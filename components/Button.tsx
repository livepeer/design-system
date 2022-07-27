import { CSS } from "@stitches/react";
import {
  NaturalPairingsKeys,
  naturalPairingsKeys,
  styled,
} from "../stitches.config";

const DEFAULT_TAG = "button";

const colorVariants: { [key in NaturalPairingsKeys]?: CSS } = {};
const compoundVariants = [];

for (const color of naturalPairingsKeys) {
  colorVariants[color] = {
    bc: `$${color}4`,
    color: `$${color}11`,
    "&:hover": { bc: `$${color}5` },
    "&:active": { bc: `$${color}6` },
    '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
      {
        bc: `$${color}4`,
        boxShadow: `inset 0 0 0 1px $colors$${color}8`,
      },
  };
  compoundVariants.push({
    variant: color,
    ghost: "true",
    css: {
      bc: "transparent",
      "&:hover": {
        bc: `$${color}3`,
        boxShadow: "none",
      },
      "&:active": {
        bc: `$${color}4`,
      },
      '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
        {
          bc: `$${color}4`,
          boxShadow: "none",
        },
    },
  });
}

export const Button = styled(DEFAULT_TAG, {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom reset?
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  // Custom
  height: "$5",

  fontFamily: "$body",
  fontSize: "$2",
  fontWeight: 600,
  ai: "center",
  cursor: "pointer",
  px: "$3",
  bc: "$neutral4",
  borderRadius: "$2",

  "&:hover": { bc: "$neutral5" },
  "&:active": { bc: "$neutral6" },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$2",
        height: "$5",
        px: "$2",
        fontSize: "$1",
        lineHeight: "$sizes$5",
      },
      "2": {
        borderRadius: "$3",
        height: "$5",
        px: "$3",
        py: "$3",
        fontSize: "$2",
        lineHeight: "$sizes$6",
      },
      "3": {
        borderRadius: "$3",
        height: "$6",
        px: "$3",
        fontSize: "$3",
        lineHeight: "$sizes$6",
      },
      "4": {
        borderRadius: "$4",
        height: "$7",
        px: "$4",
        fontSize: "$4",
        lineHeight: "$sizes$7",
      },
    },
    variant: {
      primary: {
        bc: "$primary4",
        color: "$primary11",
        "&:hover": { bc: "$primary5" },
        "&:active": { bc: "$primary6" },
        "&:disabled": {
          opacity: 0.5,
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            bc: "$primary4",
            boxShadow: "inset 0 0 0 1px $colors$primary8",
          },
      },
      neutral: {
        bc: "$neutral4",
        color: "$neutral11",
        "&:hover": { bc: "$neutral5" },
        "&:active": { bc: "$neutral6" },
        "&:disabled": {
          opacity: 0.5,
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            bc: "$neutral4",
            boxShadow: "inset 0 0 0 1px $colors$primary8",
          },
      },
      ...colorVariants,
      transparentWhite: {
        bc: "hsla(0,100%,100%,.2)",
        color: "white",
        "&:hover": {
          bc: "hsla(0,100%,100%,.25)",
        },
        "&:active": {
          bc: "hsla(0,100%,100%,.3)",
        },
        "&:disabled": {
          opacity: 0.5,
        },
      },
      transparentBlack: {
        bc: "hsla(0,0%,0%,.2)",
        color: "black",
        "&:hover": {
          bc: "hsla(0,0%,0%,.25)",
        },
        "&:active": {
          bc: "hsla(0,0%,0%,.3)",
        },
      },
    },
    ghost: {
      true: {
        bc: "transparent",
        boxShadow: "none",
      },
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      ghost: "true",
      css: {
        bc: "transparent",
        "&:hover": {
          bc: "$primary3",
          boxShadow: "none",
        },
        "&:active": {
          bc: "$primary4",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            bc: "$primary4",
            boxShadow: "none",
          },
      },
    },
    {
      variant: "neutral",
      ghost: "true",
      css: {
        bc: "transparent",
        color: "$neutral11",
        "&:hover": {
          bc: "$neutral3",
          boxShadow: "none",
        },
        "&:active": {
          bc: "$neutral4",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            bc: "$neutral4",
            boxShadow: "none",
          },
      },
    },
    ...compoundVariants,
  ],
  defaultVariants: {
    size: "1",
    variant: "neutral",
  },
});
