type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className="border px-4 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black">
      {label}
    </button>
  );
};

export default Button;
