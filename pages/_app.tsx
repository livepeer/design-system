import React from "react";
import Head from "next/head";
import "../styles.css";
import { DesignSystemProvider } from "../";
import { themes } from "../stitches.config";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
  const themeMap = {};
  Object.keys(themes).map(
    (key, _index) => (themeMap[themes[key].className] = themes[key].className)
  );
  return (
    <DesignSystemProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        defaultTheme="system"
        value={{
          ...themeMap,
          dark: "dark-theme-violet",
          light: "light-theme-violet",
        }}
      >
        <div>
          <Head>
            <title>Design System</title>
            <link
              rel="stylesheet"
              href="https://develop.modulz.app/fonts/fonts.css"
            />
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
