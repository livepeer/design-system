import { Box } from "@modulz/design-system";
import { styled } from "../stitches.config";

const DEFAULT_TAG = Box;

export type BannerType = React.ComponentProps<typeof DEFAULT_TAG>;

export const Banner = styled(DEFAULT_TAG, {
  // Reset
  boxSizing: "border-box",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$3",

  variants: {
    size: {
      "1": {
        py: "$1",
        px: "$4",
      },
    },
    variant: {
      loContrast: {
        backgroundColor: "$loContrast",
      },
      gray: {
        backgroundColor: "$neutral3",
      },
      blue: {
        backgroundColor: "$blue3",
      },
      green: {
        backgroundColor: "$green3",
      },
      indigo: {
        backgroundColor: "$indigo3",
      },
      violet: {
        backgroundColor: "$violet3",
      },
      red: {
        backgroundColor: "$red3",
      },
    },
    rounded: {
      true: {
        borderRadius: "$pill",
      },
    },
    border: {
      true: {
        borderRadius: "$pill",
      },
    },
  },
  compoundVariants: [
    {
      border: "true",
      variant: "gray",
      css: {
        borderColor: "$neutral6",
      },
    },
    {
      border: "true",
      variant: "blue",
      css: {
        borderColor: "$blue9",
      },
    },
    {
      border: "true",
      variant: "indigo",
      css: {
        borderColor: "$indigo9",
      },
    },
    {
      border: "true",
      variant: "violet",
      css: {
        borderColor: "$violet9",
      },
    },
    {
      border: "true",
      variant: "loContrast",
      css: {
        borderColor: "$neutral6",
      },
    },
  ],
  defaultVariants: {
    size: "1",
    variant: "gray",
  },
});
