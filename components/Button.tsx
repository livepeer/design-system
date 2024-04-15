import { CSS } from "@stitches/react";
import {
  NaturalPairingsKeys,
  naturalPairingsKeys,
  styled,
} from "../stitches.config";

const colorVariants: { [key in NaturalPairingsKeys]?: CSS } = {};
const compoundVariants: any[] = [];

for (const color of naturalPairingsKeys) {
  colorVariants[color] = {
    bc: `$${color}9`,
    color: `white`,
    "&:hover": { bc: `$${color}10` },
    "&:active": { bc: `$${color}11` },
    '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
      {
        bc: `$${color}9`,
        boxShadow: `inset 0 0 0 1px $colors$${color}8`,
      },
  };
  compoundVariants.push({
    variant: color,
    ghost: "true",
    css: {
      color: `$${color}9`,
      fontWeight: 600,
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

export const Button = styled("button", {
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
  fontWeight: 500,
  ai: "center",
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
        borderRadius: "$1",
        height: "$5",
        px: "$2",
        fontSize: "$1",
        lineHeight: "$sizes$5",
      },
      "2": {
        borderRadius: "$1",
        height: "$5",
        px: "$3",
        py: "$3",
        fontSize: "$2",
        lineHeight: "$sizes$6",
      },
      "3": {
        borderRadius: "$1",
        height: "$6",
        px: "$3",
        fontSize: "$2",
        lineHeight: "$sizes$6",
      },
      "4": {
        borderRadius: "$2",
        height: "$7",
        px: "$4",
        fontSize: "$3",
        lineHeight: "$sizes$7",
      },
    },
    variant: {
      primary: {
        bc: "$primary9",
        color: `white`,
        "&:hover": { bc: "$primary10" },
        "&:active": { bc: "$primary11" },
        "&:disabled": {
          opacity: 0.5,
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            bc: "$primary9",
            boxShadow: "inset 0 0 0 1px $colors$primary8",
          },
      },
      neutral: {
        bc: "$primary",
        color: "$neutral1",
        "&:hover": {
          bc: "$neutral5",
          color: "$primary",
        },
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
        color: "$primary9",
        fontWeight: 600,
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
        border: "none",
        bc: "transparent",
        color: "$neutral12",
        fontWeight: 600,
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
