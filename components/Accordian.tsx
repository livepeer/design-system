import React from "react";
import { styled } from "../stitches.config";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "@radix-ui/react-icons";

import * as Polymorphic from "@radix-ui/react-polymorphic";

const StyledAccordion = styled(AccordionPrimitive.Root, {
  boxShadow: "0 0 0 1px $colors$neutral6",
  borderRadius: "$1",
});

const StyledPanel = styled(AccordionPrimitive.Content, {
  pt: "$0",
  pb: "$5",
  px: "$7",
  backgroundColor: "$neutral2",
});

const StyledButton: any = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  display: "flex",
  alignItems: "center",
  px: "$3",
  py: "$4",
  color: "$hiContrast",
  width: "100%",

  "@hover": {
    "&:hover": {
      backgroundColor: "$neutral2",
    },
  },

  "&:focus": {
    outline: "none",
  },

  svg: {
    mr: "$3",
    transition: "transform 175ms cubic-bezier(0.65, 0, 0.35, 1)",
  },

  '&[data-state="open"]': {
    backgroundColor: "$neutral2",
    svg: {
      transform: "rotate(90deg)",
    },
  },
});

const StyledItem = styled(AccordionPrimitive.Item, {
  // borderBottom: "1px solid $colors$neutral6",

  "&:last-of-type": {
    borderBottom: 0,
  },

  [`&:first-of-type ${StyledPanel}`]: {
    borderTopRightRadius: "$1",
    borderTopLeftRadius: "$1",
  },

  [`&:last-of-type ${StyledPanel}`]: {
    borderBottomRightRadius: "$1",
    borderBottomLeftRadius: "$1",
  },

  [`&:first-of-type ${StyledButton}`]: {
    borderTopRightRadius: "$1",
    borderTopLeftRadius: "$1",
  },

  [`&:last-of-type ${StyledButton}`]: {
    borderBottomRightRadius: "$1",
    borderBottomLeftRadius: "$1",
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
});

type AccordionButtonOwnProps = Polymorphic.OwnProps<
  typeof AccordionPrimitive.Trigger
> & {
  css?: any;
};

type AccordionButtonComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof AccordionPrimitive.Trigger>,
  AccordionButtonOwnProps
>;

export const AccordionButton: any = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledButton {...props} ref={forwardedRef}>
        <ChevronRightIcon />
        {children}
      </StyledButton>
    </StyledHeader>
  )
) as AccordionButtonComponent;

AccordionButton.displayName = "AccordionButton";

export const Accordion: any = StyledAccordion;
export const AccordionItem: any = StyledItem;
export const AccordionPanel: any = StyledPanel;
