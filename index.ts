import { DesignSystemProvider as DesignSystemProviderModulz } from "@modulz/design-system";
import React from "react";

export {
  Alert,
  Avatar,
  AvatarGroup,
  AvatarNestedItem,
  AspectRatio,
  Box,
  Checkbox,
  Code,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuCheckboxItem,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ControlGroup,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Kbd,
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  Overlay,
  Paragraph,
  Panel,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Portal,
  ProgressBar,
  Radio,
  RadioGroup,
  Section,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SimpleToggle,
  Skeleton,
  Slider,
  Status,
  Sup,
  Sub,
  TabLink,
  TextArea,
  Tooltip,
  TreeItem,
  VerifiedBadge,
} from "@modulz/design-system";

// Customized modulz components
export {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "./components/Accordian";
export {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./components/Dialog";
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/Tabs";
export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/AlertDialog";
export { Button } from "./components/Button";
export { Link } from "./components/Link";
export { Banner } from "./components/Banner";
export { Promo } from "./components/Promo";
export { Label } from "./components/Label";
export { Text } from "./components/Text";
export { TextField } from "./components/TextField";
export { Select } from "./components/Select";
export { Card } from "./components/Card";
export { Container } from "./components/Container";
export { Badge } from "./components/Badge";
export {
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
} from "./components/DropdownMenu";
export { SnackbarProvider, useSnackbar } from "./components/Snackbar";
export { Switch } from "./components/Switch";
export { RadioCard, RadioCardGroup } from "./components/RadioCard";
export {
  Caption,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Thead,
  Table,
} from "./components/Table";

export {
  Root as HoverCardRoot,
  Trigger as HoverCardTrigger,
  Content as HoverCardContent,
  Arrow as HoverCardArrow,
} from "@radix-ui/react-hover-card";
export { AccessibleIcon } from "@radix-ui/react-accessible-icon";

export {
  Root as ScrollAreaRoot,
  Viewport as ScrollAreaViewport,
  Scrollbar as ScrollAreaScrollbar,
  Thumb as ScrollAreaThumb,
  Corner as ScrollAreaCorner,
} from "@radix-ui/react-scroll-area";

// Stitches
export {
  styled,
  css,
  themes,
  getCssText,
  globalCss,
  keyframes,
} from "./stitches.config";

export const DesignSystemProvider = DesignSystemProviderModulz as React.FC<{
  children: React.ReactNode;
}>;
