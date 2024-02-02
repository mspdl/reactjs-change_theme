import { useTheme } from "@/contexts/ThemeContext";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  const themeCtx = useTheme();

  return (
    <button
      className={`border px-4 py-3 rounded-md ${
        themeCtx?.theme === "dark"
          ? "bg-white text-black"
          : "bg-black text-white"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
