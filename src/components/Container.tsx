import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen px-10 bg-white text-black dark:bg-black dark:text-white">
      <div className="container mx-auto"></div> {children}
    </div>
  );
};

export default Container;
