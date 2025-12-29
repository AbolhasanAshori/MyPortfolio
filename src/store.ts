import { persistentAtom } from "@nanostores/persistent";
import { atom, onSet } from "nanostores";

export type ColorMode = "dark" | "light" | "system";

export const menuOpen = atom(false);

export const colorMode = persistentAtom<ColorMode>("mode", "system");
onSet(colorMode, ({ newValue }) => {
  const value =
    newValue !== "system"
      ? newValue
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  document.documentElement.dataset.theme = value;
});
