import { useTheme } from "@/contexts/ThemeContext";
import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  const themeCtx = useTheme();

  return (
    <div
      className={`w-full h-screen px-10 ${
        themeCtx?.theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto"></div> {children}
    </div>
  );
};

export default Container;
