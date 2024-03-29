import React from "react";
import Head from "next/head";
import "../styles.css";
import { DesignSystemProvider } from "../";
import { themeKeys, getThemes } from "../stitches.config";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

const themes = getThemes();

function App({ Component, pageProps }: AppProps) {
  const themeMap = themeKeys.reduce(
    (prev, key) => ({
      ...prev,
      [themes[key].className]: themes[key].className,
    }),
    {}
  ) as { [key: string]: string };
  return (
    <DesignSystemProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        defaultTheme="system"
        value={{
          ...themeMap,
          dark: "dark-theme-green",
          light: "light-theme-green",
        }}
      >
        <div>
          <Head>
            <title>Livepeer Design System</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default App;
