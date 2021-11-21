import { Button } from "../";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "../";
import { Box } from "../";
import { useEffect } from "react";

export function DarkThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme) {
      if (resolvedTheme.includes("dark")) {
        console.log("dark!");
      } else {
        console.log("light!");
      }
    }
  }, [resolvedTheme]);

  return (
    <Box>
      <Button
        onClick={() =>
          setTheme(
            resolvedTheme.includes("dark")
              ? resolvedTheme.replace("dark", "light")
              : resolvedTheme.replace("light", "dark")
          )
        }
      >
        Toggle theme
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem
              onSelect={() =>
                setTheme(
                  `${
                    resolvedTheme.includes("dark") ? "dark" : "light"
                  }-theme-pink`
                )
              }
            >
              Pink
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() =>
                setTheme(
                  `${
                    resolvedTheme.includes("dark") ? "dark" : "light"
                  }-theme-red`
                )
              }
            >
              Red
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() =>
                setTheme(
                  `${
                    resolvedTheme.includes("dark") ? "dark" : "light"
                  }-theme-plum`
                )
              }
            >
              Item
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() =>
                setTheme(
                  `${
                    resolvedTheme.includes("dark") ? "dark" : "light"
                  }-theme-green`
                )
              }
            >
              Item
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
}
