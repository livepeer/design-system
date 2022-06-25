import { styled } from "../stitches.config";

export const Container = styled("div", {
  // Reset
  boxSizing: "border-box",
  flexShrink: 0,

  // Custom
  ml: "auto",
  mr: "auto",
  px: "$5",

  variants: {
    size: {
      "1": {
        maxWidth: "430px",
      },
      "2": {
        maxWidth: "715px",
      },
      "3": {
        maxWidth: "1145px",
      },
      "4": {
        maxWidth: "1440px",
      },
      "5": {
        maxWidth: "1600px",
      },
      "6": {
        maxWidth: "1920px",
      },
      "7": {
        maxWidth: "none",
      },
    },
  },
  defaultVariants: {
    size: "4",
  },
});
