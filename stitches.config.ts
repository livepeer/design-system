import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
export type { VariantProps } from '@stitches/react';

import {
  gray,
  mauve,
  slate,
  sage,
  olive,
  sand,
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  sky,
  mint,
  cyan,
  teal,
  green,
  grass,
  lime,
  yellow,
  amber,
  orange,
  brown,
  bronze,
  gold,
  grayDark,
  mauveDark,
  slateDark,
  sageDark,
  oliveDark,
  sandDark,
  tomatoDark,
  redDark,
  crimsonDark,
  pinkDark,
  plumDark,
  purpleDark,
  violetDark,
  indigoDark,
  blueDark,
  skyDark,
  mintDark,
  cyanDark,
  tealDark,
  greenDark,
  grassDark,
  limeDark,
  yellowDark,
  amberDark,
  orangeDark,
  brownDark,
  bronzeDark,
  goldDark,
  whiteA,
  blackA,
} from "@radix-ui/colors";

const fonts = {
  body: "Inter, -apple-system, system-ui, sans-serif",
  mono: "menlo, monospace",
} as const;

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...olive,
      ...sand,
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...sky,
      ...mint,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...lime,
      ...yellow,
      ...amber,
      ...orange,
      ...brown,
      ...bronze,
      ...gold,

      ...whiteA,
      ...blackA,

      // Semantic colors
      hiContrast: "$slate12",
      // loContrast: '$slate1',
      loContrast: "white",
      canvas: "hsl(0 0% 93%)",
      panel: "white",
      transparentPanel: "hsl(0 0% 0% / 97%)",
      shadowLight: "hsl(206 22% 7% / 35%)",
      shadowDark: "hsl(206 22% 7% / 20%)",
    },
    fonts: {
      untitled: "Untitled Sans, -apple-system, system-ui, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    // space: {
    //   1: '4px',
    //   2: '8px',
    //   3: '16px',
    //   4: '20px',
    //   5: '24px',
    //   6: '32px',
    //   7: '48px',
    //   8: '64px',
    //   9: '80px',
    // },
    // sizes: {
    //   1: '4px',
    //   2: '8px',
    //   3: '16px',
    //   4: '20px',
    //   5: '24px',
    //   6: '32px',
    //   7: '48px',
    //   8: '64px',
    //   9: '80px',
    // },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
      7: "27px",
      8: "35px",
      9: "59px",
    },
    // fontSizes: {
    //   1: '11px',
    //   2: '12px',
    //   3: '15px',
    //   4: '17px',
    //   5: '20px',
    //   6: '22px',
    //   7: '28px',
    //   8: '36px',
    //   9: '60px',
    // },
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "12px",
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(min-width: 1200px)",
    bp4: "(min-width: 1800px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<"alignItems">) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<"alignContent">) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...oliveDark,
    ...sandDark,
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...indigoDark,
    ...blueDark,
    ...skyDark,
    ...mintDark,
    ...cyanDark,
    ...tealDark,
    ...greenDark,
    ...grassDark,
    ...limeDark,
    ...yellowDark,
    ...amberDark,
    ...orangeDark,
    ...brownDark,
    ...bronzeDark,
    ...goldDark,

    // Semantic colors
    hiContrast: "$slate12",
    loContrast: "$slate1",
    canvas: "hsl(0 0% 15%)",
    panel: "$slate3",
    transparentPanel: "hsl(0 100% 100% / 97%)",
    shadowLight: "hsl(206 22% 7% / 35%)",
    shadowDark: "hsl(206 22% 7% / 20%)",
  },
});

const lightThemeColors = {
  ...gray,
  ...mauve,
  ...slate,
  ...sage,
  ...olive,
  ...sand,
  ...tomato,
  ...red,
  ...crimson,
  ...pink,
  ...plum,
  ...purple,
  ...violet,
  ...indigo,
  ...blue,
  ...sky,
  ...mint,
  ...cyan,
  ...teal,
  ...green,
  ...grass,
  ...lime,
  ...yellow,
  ...amber,
  ...orange,
  ...brown,
  ...bronze,
  ...gold,
  ...whiteA,
  ...blackA,
} as const;

const darkThemeColors = {
  ...grayDark,
  ...mauveDark,
  ...slateDark,
  ...sageDark,
  ...oliveDark,
  ...sandDark,
  ...tomatoDark,
  ...redDark,
  ...crimsonDark,
  ...pinkDark,
  ...plumDark,
  ...purpleDark,
  ...violetDark,
  ...indigoDark,
  ...blueDark,
  ...skyDark,
  ...mintDark,
  ...cyanDark,
  ...tealDark,
  ...greenDark,
  ...grassDark,
  ...limeDark,
  ...yellowDark,
  ...amberDark,
  ...orangeDark,
  ...brownDark,
  ...bronzeDark,
  ...goldDark,
  ...whiteA,
  ...blackA,
} as const;

export const naturalPairingsKeys = [
  "gray",
  "tomato",
  "red",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",

  "indigo",
  "blue",
  "sky",
  "cyan",

  "teal",
  "mint",
  "green",

  "grass",
  "lime",

  "yellow",
  "amber",
  "orange",
  "brown",
] as const;

export type NaturalPairingsKeys = typeof naturalPairingsKeys[number];

export type NaturalPairings = {
  [K in NaturalPairingsKeys]: string;
};

export const naturalPairings: NaturalPairings = {
  tomato: "mauve",
  red: "mauve",
  crimson: "mauve",
  pink: "mauve",
  plum: "mauve",
  purple: "mauve",
  violet: "mauve",

  indigo: "slate",
  blue: "slate",
  sky: "slate",
  cyan: "slate",

  teal: "sage",
  mint: "sage",
  green: "sage",

  grass: "olive",
  lime: "olive",

  yellow: "sand",
  amber: "sand",
  orange: "sand",
  brown: "sand",
  gray: "sand",
} as const;

export type ThemeKey =
  | `light-theme-${NaturalPairingsKeys}`
  | `dark-theme-${NaturalPairingsKeys}`;

export const themeKeys: ThemeKey[] = [
  ...naturalPairingsKeys.map(
    (e) => `light-theme-${e}` as `light-theme-${NaturalPairingsKeys}`
  ),
  ...naturalPairingsKeys.map(
    (e) => `dark-theme-${e}` as `dark-theme-${NaturalPairingsKeys}`
  ),
];

// TODO fix this typing
export const getThemes = () => {
  const themes = naturalPairingsKeys.reduce(
    (prev, primary) => ({
      ...prev,
      [`light-theme-${primary}`]: createTheme(`light-theme-${primary}`, {
        colors: {
          ...lightThemeColors,

          // Semantic colors
          primary1: `$${primary}1`,
          primary2: `$${primary}2`,
          primary3: `$${primary}3`,
          primary4: `$${primary}4`,
          primary5: `$${primary}5`,
          primary6: `$${primary}6`,
          primary7: `$${primary}7`,
          primary8: `$${primary}8`,
          primary9: `$${primary}9`,
          primary10: `$${primary}10`,
          primary11: `$${primary}11`,
          primary12: `$${primary}12`,

          neutral1: `$${naturalPairings[primary]}1`,
          neutral2: `$${naturalPairings[primary]}2`,
          neutral3: `$${naturalPairings[primary]}3`,
          neutral4: `$${naturalPairings[primary]}4`,
          neutral5: `$${naturalPairings[primary]}5`,
          neutral6: `$${naturalPairings[primary]}6`,
          neutral7: `$${naturalPairings[primary]}7`,
          neutral8: `$${naturalPairings[primary]}8`,
          neutral9: `$${naturalPairings[primary]}9`,
          neutral10: `$${naturalPairings[primary]}10`,
          neutral11: `$${naturalPairings[primary]}11`,
          neutral12: `$${naturalPairings[primary]}12`,

          hiContrast: `$${naturalPairings[primary]}12`,
          loContrast: "$whiteA12",
          canvas: "hsl(0 0% 93%)",
          panel: `$${naturalPairings[primary]}2`,
          transparentPanel: "hsl(0 0% 0% / 97%)",
          shadowLight: "hsl(206 22% 7% / 35%)",
          shadowDark: "hsl(206 22% 7% / 20%)",
        },
        fonts,
      }),
      [`dark-theme-${primary}`]: createTheme(`dark-theme-${primary}`, {
        colors: {
          ...darkThemeColors,

          // Semantic colors
          primary1: `$${primary}1`,
          primary2: `$${primary}2`,
          primary3: `$${primary}3`,
          primary4: `$${primary}4`,
          primary5: `$${primary}5`,
          primary6: `$${primary}6`,
          primary7: `$${primary}7`,
          primary8: `$${primary}8`,
          primary9: `$${primary}9`,
          primary10: `$${primary}10`,
          primary11: `$${primary}11`,
          primary12: `$${primary}12`,

          neutral1: `$${naturalPairings[primary]}1`,
          neutral2: `$${naturalPairings[primary]}2`,
          neutral3: `$${naturalPairings[primary]}3`,
          neutral4: `$${naturalPairings[primary]}4`,
          neutral5: `$${naturalPairings[primary]}5`,
          neutral6: `$${naturalPairings[primary]}6`,
          neutral7: `$${naturalPairings[primary]}7`,
          neutral8: `$${naturalPairings[primary]}8`,
          neutral9: `$${naturalPairings[primary]}9`,
          neutral10: `$${naturalPairings[primary]}10`,
          neutral11: `$${naturalPairings[primary]}11`,
          neutral12: `$${naturalPairings[primary]}12`,

          hiContrast: `$${naturalPairings[primary]}12`,
          loContrast: `$${naturalPairings[primary]}1`,
          canvas: "hsl(0 0% 15%)",
          panel: `$${naturalPairings[primary]}2`,
          transparentPanel: "hsl(0 100% 100% / 97%)",
          shadowLight: "hsl(206 22% 7% / 35%)",
          shadowDark: "hsl(206 22% 7% / 20%)",
        },
        fonts,
      }),
    }),
    {}
  )

  return themes;
}

export type CSS = Stitches.CSS<typeof config>;
