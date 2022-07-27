import { styled } from "../stitches.config";

const DEFAULT_TAG = "input";

const StyledTextField = styled(DEFAULT_TAG, {
  // Reset
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  fontFamily: "inherit",
  margin: "0",
  outline: "none",
  padding: "0",
  width: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  lineHeight: "1",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom
  backgroundColor: "$loContrast",
  boxShadow: "inset 0 0 0 1px $colors$neutral7",
  color: "$hiContrast",

  "&:-webkit-autofill": {
    boxShadow:
      "inset 0 0 0 1px $colors$primary6, inset 0 0 0 100px $colors$primary3",
  },

  "&:-webkit-autofill::first-line": {
    fontFamily: "$body",
    color: "$hiContrast",
  },

  "&:focus": {
    boxShadow:
      "inset 0px 0px 0px 1px $colors$primary8, 0px 0px 0px 1px $colors$primary8",
    "&:-webkit-autofill": {
      boxShadow:
        "inset 0px 0px 0px 1px $colors$primary8, 0px 0px 0px 1px $colors$primary8, inset 0 0 0 100px $colors$primary3",
    },
  },
  "&::placeholder": {
    color: "$neutral9",
  },
  "&:disabled": {
    pointerEvents: "none",
    backgroundColor: "$neutral2",
    color: "$neutral8",
    cursor: "not-allowed",
    "&::placeholder": {
      color: "$neutral7",
    },
  },
  "&:read-only": {
    backgroundColor: "$neutral2",
    "&:focus": {
      boxShadow: "inset 0px 0px 0px 1px $colors$neutral7",
    },
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        height: "$5",
        fontSize: "$1",
        px: "$1",
        "&:-webkit-autofill::first-line": {
          fontSize: "$1",
        },
      },
      "2": {
        borderRadius: "$2",
        height: "$6",
        fontSize: "$3",
        px: "$2",
        "&:-webkit-autofill::first-line": {
          fontSize: "$3",
        },
      },
      "3": {
        borderRadius: "$2",
        height: "$7",
        fontSize: "$3",
        px: "$2",
        "&:-webkit-autofill::first-line": {
          fontSize: "$3",
        },
      },
    },
    variant: {
      ghost: {
        boxShadow: "none",
        backgroundColor: "transparent",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$neutralA7",
          },
        },
        "&:focus": {
          backgroundColor: "$loContrast",
          boxShadow:
            "inset 0px 0px 0px 1px $colors$primary8, 0px 0px 0px 1px $colors$primary8",
        },
        "&:disabled": {
          backgroundColor: "transparent",
        },
        "&:read-only": {
          backgroundColor: "transparent",
        },
      },
      white: {
        boxShadow: "inset 0 0 0 1px $colors$neutral7",
        backgroundColor: "white",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px $colors$neutralA7",
          },
        },
        "&:focus": {
          backgroundColor: "white",
          boxShadow:
            "inset 0px 0px 0px 1px $colors$primary8, 0px 0px 0px 1px $colors$primary8",
        },
        "&::placeholder": {
          color: "$neutral9",
        },
        "&:disabled": {
          pointerEvents: "none",
          backgroundColor: "$neutral2",
          color: "$neutral8",
          cursor: "not-allowed",
          "&::placeholder": {
            color: "$neutral7",
          },
        },
        "&:read-only": {
          backgroundColor: "$neutral2",
          "&:focus": {
            boxShadow: "inset 0px 0px 0px 1px $colors$neutral7",
          },
        },
      },
    },
    state: {
      invalid: {
        boxShadow: "inset 0 0 0 1px $colors$red7",
        "&:focus": {
          boxShadow:
            "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
        },
      },
      valid: {
        boxShadow: "inset 0 0 0 1px $colors$green7",
        "&:focus": {
          boxShadow:
            "inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
        },
      },
    },
    cursor: {
      default: {
        cursor: "default",
        "&:focus": {
          cursor: "text",
        },
      },
      text: {
        cursor: "text",
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});

export const TextField = StyledTextField;
