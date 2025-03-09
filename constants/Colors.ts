/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: {
      default: "#11181C",
      subtitle: "#687076",
      title: "#000",
      defaultSemiBold: "#000",
      link: "#0a7ea4",
    },
    background: "#fff",
    tint: tintColorLight,
    secondaryTint: "#b5d8e3",
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    shadow: "#000",
  },
  dark: {
    text: {
      default: "#ECEDEE",
      subtitle: "#9BA1A6",
      title: "#fff",
      defaultSemiBold: "#fff",
      link: "#0a7ea4",
    },
    background: "#151718",
    tint: tintColorDark,
    secondaryTint: "#b5d8e3",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    shadow: "#000",
  },
};
