import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (value) => {
  const [darkModeStatus, setDarkModeStatus] = useLocalStorage(
    "darkMode",
    false
  );

  return [darkModeStatus, setDarkModeStatus];
};
