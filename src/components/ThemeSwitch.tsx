import { useTheme } from "@/contexts/ThemeContext";

export const ThemeSwitch = () => {
  const themeCtx = useTheme();

  const handleThemeSwitch = () => {
    themeCtx?.setTheme(themeCtx?.theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      onClick={handleThemeSwitch}
      className={`fixed top-1 left-[30%] p-3 rounded-md text-center cursor-pointer ${
        themeCtx?.theme === "dark"
          ? "bg-white text-black"
          : "bg-black text-white"
      }`}
    >
      {`Change to ${themeCtx?.theme === "dark" ? "light" : "dark"} theme`}
    </div>
  );
};

export default ThemeSwitch;
