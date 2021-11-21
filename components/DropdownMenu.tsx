import {
  styled,
  DropdownMenuItem as DropdownMenuItemBase,
  DropdownMenuCheckboxItem as DropdownMenuCheckboxItemBase,
  DropdownMenuRadioItem as DropdownMenuRadioItemBase,
} from "@modulz/design-system";
import { naturalPairings } from "../stitches.config";

const colorVairants: any = {};

for (const color in naturalPairings) {
  colorVairants[color] = {
    "&:focus": {
      outline: "none",
      backgroundColor: `$${color}4`,
      color: "$hiContrast",
    },
  };
}

export const DropdownMenuItem: any = styled(DropdownMenuItemBase, {
  variants: {
    color: {
      primary: {
        "&:focus": {
          outline: "none",
          backgroundColor: "$primary4",
          color: "$hiContrast",
        },
      },
      ...colorVairants,
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export const DropdownMenuRadioItem: any = styled(DropdownMenuRadioItemBase, {
  variants: {
    color: {
      primary: {
        "&:focus": {
          outline: "none",
          backgroundColor: "$primary4",
          color: "$hiContrast",
        },
      },
      ...colorVairants,
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export const DropdownMenuCheckboxItem: any = styled(
  DropdownMenuCheckboxItemBase,
  {
    variants: {
      color: {
        primary: {
          "&:focus": {
            outline: "none",
            backgroundColor: "$primary4",
            color: "$hiContrast",
          },
        },
        ...colorVairants,
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);
