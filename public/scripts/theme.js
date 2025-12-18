const KEY = "mode";

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
function getPreferredTheme() {
  return mediaQuery.matches ? "dark" : "light";
}

try {
  const stored = localStorage.getItem(KEY);
  const saved = stored ? JSON.parse(stored) : "system";
  const activeTheme = saved !== "system" ? saved : getPreferredTheme();
  document.documentElement.dataset.theme = activeTheme;
} catch {
  document.documentElement.dataset.theme = getPreferredTheme();
} finally {
  localStorage.setItem(KEY, getPreferredTheme());
}

mediaQuery.addEventListener("change", () => {
  document.documentElement.dataset.theme = getPreferredTheme();
  localStorage.setItem(KEY, getPreferredTheme());
});
