import { createTheme } from "@modulz/design-system";
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

function getThemes() {
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
  ) as {
    [key in ThemeKey]: ReturnType<typeof createTheme>;
  };

  return themes;
}

export const themes = getThemes();

export {
  styled,
  css,
  getCssText,
  globalCss,
  keyframes,
} from "@modulz/design-system";
