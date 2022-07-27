import {
  DropdownMenuItem as DropdownMenuItemBase,
  DropdownMenuCheckboxItem as DropdownMenuCheckboxItemBase,
  DropdownMenuRadioItem as DropdownMenuRadioItemBase,
} from "@modulz/design-system";
import { CSS } from "@stitches/react";
import {
  styled,
  naturalPairingsKeys,
  NaturalPairingsKeys,
} from "../stitches.config";

const colorVariants: { [key in NaturalPairingsKeys]?: CSS } = {};

for (const color of naturalPairingsKeys) {
  colorVariants[color] = {
    "&:focus": {
      outline: "none",
      backgroundColor: `$${color}4`,
      color: "$hiContrast",
    },
  };
}

export const DropdownMenuItem = styled(DropdownMenuItemBase, {
  variants: {
    color: {
      primary: {
        "&:focus": {
          outline: "none",
          backgroundColor: "$primary4",
          color: "$hiContrast",
        },
      },
      ...colorVariants,
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export const DropdownMenuRadioItem = styled(DropdownMenuRadioItemBase, {
  variants: {
    color: {
      primary: {
        "&:focus": {
          outline: "none",
          backgroundColor: "$primary4",
          color: "$hiContrast",
        },
      },
      ...colorVariants,
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export const DropdownMenuCheckboxItem = styled(DropdownMenuCheckboxItemBase, {
  variants: {
    color: {
      primary: {
        "&:focus": {
          outline: "none",
          backgroundColor: "$primary4",
          color: "$hiContrast",
        },
      },
      ...colorVariants,
    },
  },
  defaultVariants: {
    color: "primary",
  },
});
