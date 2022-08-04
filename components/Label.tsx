import { styled } from "../stitches.config";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Text } from "./Text";

export const Label = styled(LabelPrimitive.Root, Text, {
  fontSize: "$2",
  display: "inline-block",
  verticalAlign: "middle",
  cursor: "default",
});
