import React from "react";
import type { CSS } from "../stitches.config";
import { styled } from "../stitches.config";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const StyledAccordion = styled(AccordionPrimitive.Root, {
  boxShadow: "0 0 0 1px $colors$neutral6",
  borderRadius: "$2",
});

type AccordionPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Root
>;
type AccordionProps = AccordionPrimitiveProps & { css?: CSS };

export const Accordion = React.forwardRef<
  React.ElementRef<typeof StyledAccordion>,
  AccordionProps
>(({ children, ...props }, forwardedRef) => (
  <StyledAccordion
    ref={forwardedRef}
    {...props}
    {...(props.type === "single" ? { collapsible: true } : {})}
  >
    {children}
  </StyledAccordion>
));

Accordion.displayName = "Accordion";

const StyledItem = styled(AccordionPrimitive.Item, {
  borderTop: "1px solid $colors$neutral6",
  "button:focus": { boxShadow: "none" },
  "&:first-of-type": {
    borderTop: "none",
  },
  "&:last-of-type": {
    borderBottom: "none",
  },
  "&:hover": {
    "&:first-of-type": {
      button: {
        borderTopLeftRadius: "$2",
        borderTopRightRadius: "$2",
      },
    },
    "&:last-of-type": {
      button: {
        borderBottomLeftRadius: "$2",
        borderBottomRightRadius: "$2",
      },
    },
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
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
  justifyContent: "space-between",
  p: "$2",
  color: "$hiContrast",
  width: "100%",

  "&:hover": {
    backgroundColor: "$neutral2",
  },

  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px $colors$neutral8, 0 0 0 1px $colors$neutral8",
  },

  svg: {
    transition: "transform 175ms cubic-bezier(0.65, 0, 0.35, 1)",
  },

  '&[data-state="open"]': {
    svg: {
      transform: "rotate(180deg)",
    },
  },
});

type AccordionTriggerPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
>;
type AccordionTriggerProps = AccordionTriggerPrimitiveProps & { css?: CSS };

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <ChevronDownIcon />
    </StyledTrigger>
  </StyledHeader>
));

AccordionTrigger.displayName = "AccordionTrigger";

const StyledContent = styled(AccordionPrimitive.Content, {
  p: "$2",
});

export const AccordionItem = StyledItem;
export const AccordionContent = StyledContent;
