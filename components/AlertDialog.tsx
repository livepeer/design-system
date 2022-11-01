import { keyframes, styled } from "../stitches.config";
import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { overlayStyles } from "./Overlay";
import { panelStyles } from "./Panel";

type AlertDialogProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Root
> & {
  children: React.ReactNode;
};

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const scaleIn = keyframes({
  from: { transform: "translate(-50%, -50%) scale(0.9)" },
  to: { transform: "translate(-50%, -50%) scale(1)" },
});

const fadeout = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, overlayStyles, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,.35)",
  inset: 0,
  zIndex: 1000,

  variants: {
    animation: {
      true: {
        '&[data-state="open"]': {
          animation: `${fadeIn} 300ms ease-out`,
        },

        '&[data-state="closed"]': {
          animation: `${fadeout} 200ms ease-out`,
        },
      },
    },
  },
});

export function AlertDialog({ children, ...props }: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      <StyledOverlay animation />
      {children}
    </AlertDialogPrimitive.Root>
  );
}

const StyledAlertDialogContent = styled(
  AlertDialogPrimitive.Content,
  panelStyles,
  {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 200,
    maxHeight: "85vh",
    padding: "$4",
    marginTop: "-5vh",
    backgroundColor: "$panel",
    borderRadius: "$4",
    boxShadow:
      "$colors$shadowLight 0px 10px 38px -10px, $colors$shadowDark 0px 10px 20px -15px",
    color: "$black",
    zIndex: 1001,

    "&:focus": {
      outline: "none",
    },

    variants: {
      animation: {
        fade: {
          '&[data-state="open"]': {
            animation: `${fadeIn} 300ms ease-out`,
          },

          '&[data-state="closed"]': {
            animation: `${fadeout} 200ms ease-out`,
          },
        },
        scale: {
          animation: `${fadeIn} 300ms ease-out, ${scaleIn} 200ms ease-out`,
        },
      },
    },
    defaultVariants: {
      animation: "scale",
    },
  }
);

export const AlertDialogContent: React.FC<
  AlertDialogPrimitive.AlertDialogContentProps & {
    animation?: "scale" | "fade";
  }
> = ({ children, animation = "scale", ...props }) => (
  <StyledAlertDialogContent animation={animation} {...props} style={{ overflow: 'auto' }}>
    {children}
  </StyledAlertDialogContent>
);

const AlertDialogTitle = AlertDialogPrimitive.Title;
const AlertDialogDescription = AlertDialogPrimitive.Description;
const AlertDialogAction = AlertDialogPrimitive.Action;
const AlertDialogCancel = AlertDialogPrimitive.Cancel;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export {
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
