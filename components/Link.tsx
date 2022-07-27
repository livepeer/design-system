import { Text } from "@modulz/design-system";
import { styled } from "../stitches.config";

const DEFAULT_TAG = "a";

export const Link = styled(DEFAULT_TAG, {
  alignItems: "center",
  gap: "$1",
  flexShrink: 0,
  outline: "none",
  textDecorationLine: "none",
  textUnderlineOffset: "3px",
  textDecorationColor: "$neutral4",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  lineHeight: "inherit",
  "@hover": {
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  "&:focus": {
    outline: "none",
    textDecorationLine: "none",
  },
  [`& ${Text}`]: {
    color: "inherit",
  },
  variants: {
    variant: {
      blue: {
        color: "$blue11",
        textDecorationColor: "$blue4",
        "&:focus": {
          outlineColor: "$blue8",
        },
      },
      indigo: {
        color: "$indigo11",
        textDecorationColor: "$indigo4",
        "&:focus": {
          outlineColor: "$indigo8",
        },
      },
      primary: {
        color: "$primary11",
        textDecorationColor: "$primary4",
        "&:focus": {
          outlineColor: "$primary8",
        },
      },
      subtle: {
        color: "$neutral11",
        textDecorationColor: "$neutral4",
        "&:focus": {
          outlineColor: "$neutral8",
        },
      },
      contrast: {
        color: "$hiContrast",
        textDecoration: "underline",
        textDecorationColor: "$neutral4",
        "@hover": {
          "&:hover": {
            textDecorationColor: "$neutral7",
          },
        },
        "&:focus": {
          outlineColor: "$neutral8",
        },
      },
    },
  },
  defaultVariants: {
    variant: "contrast",
  },
});
