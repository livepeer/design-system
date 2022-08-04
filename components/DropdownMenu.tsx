import { CSS } from "@stitches/react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  styled,
  naturalPairingsKeys,
  NaturalPairingsKeys,
} from "../stitches.config";
import { itemCss, labelCss, menuCss, separatorCss } from "./Menu";
import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";
import { Box } from "./Box";
import { Flex } from "./Flex";
import { panelStyles } from "./Panel";

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

const DropdownMenuItemBase = styled(DropdownMenuPrimitive.Item, itemCss);

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const StyledContent = styled(
  DropdownMenuPrimitive.Content,
  menuCss,
  panelStyles
);

type DropdownMenuContentPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Content
>;
type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps & {
  css?: CSS;
};

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DropdownMenuContentProps
>((props, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <StyledContent {...props} ref={forwardedRef} />
  </DropdownMenuPrimitive.Portal>
));

DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});
const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss);
const DropdownMenuSeparator = styled(
  DropdownMenuPrimitive.Separator,
  separatorCss
);

const StyledDropdownMenuCheckboxItem = styled(
  DropdownMenuPrimitive.CheckboxItem,
  itemCss
);

type DialogMenuCheckboxItemPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
>;
type DialogMenuCheckboxItemProps = DialogMenuCheckboxItemPrimitiveProps & {
  css?: CSS;
};

const DropdownMenuCheckboxItemBase = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuCheckboxItem>,
  DialogMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: "absolute", left: "$1" }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuCheckboxItem>
));

DropdownMenuCheckboxItemBase.displayName = "DropdownMenuCheckboxItemBase";

const DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {});
const StyledDropdownMenuRadioItem = styled(
  DropdownMenuPrimitive.RadioItem,
  itemCss
);

type DialogMenuRadioItemPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.RadioItem
>;
type DialogMenuRadioItemProps = DialogMenuRadioItemPrimitiveProps & {
  css?: CSS;
};

const DropdownMenuRadioItemBase = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuRadioItem>,
  DialogMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: "absolute", left: "$1" }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Flex
          css={{
            width: "$3",
            height: "$3",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            css={{
              width: "$1",
              height: "$1",
              backgroundColor: "currentColor",
              borderRadius: "$round",
            }}
          />
        </Flex>
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuRadioItem>
));

DropdownMenuRadioItemBase.displayName = "DropdownMenuRadioItemBase";

const DropdownMenuItem = styled(DropdownMenuItemBase, {
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

const DropdownMenuRadioItem = styled(DropdownMenuRadioItemBase, {
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

const DropdownMenuCheckboxItem = styled(DropdownMenuCheckboxItemBase, {
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

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
};
