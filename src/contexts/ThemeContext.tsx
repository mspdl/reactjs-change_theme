import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const THEME = "THEME";

type ThemeContext = {
  theme: string;
  setTheme: (newTheme: string) => void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem(THEME) ?? "light"
      : "light"
  );

  useEffect(() => {
    setIsMounted(true);
    typeof window !== "undefined";
    localStorage.setItem(THEME, theme);
  }, [theme]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
