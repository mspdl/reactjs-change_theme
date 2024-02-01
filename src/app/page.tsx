"use client";

import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [nextTheme, setNextTheme] = useState("Dark");

  const changeTheme = () => {
    console.log(theme);
    if (theme === "dark") {
      setTheme("light");
      setNextTheme("Dark");
    } else {
      setTheme("dark");
      setNextTheme("Light");
    }
  };

  const getTextColor = () => {
    return theme === "dark" ? "white" : "black";
  };

  const getBackgroundColor = () => {
    return theme === "dark" ? "black" : "white";
  };

  return (
    <div className={"w-screen h-screen p-10 flex bg-" + getBackgroundColor()}>
      <div className="pr-32">
        <h1 className={"text-3xl mb-10 font-bold text-" + getTextColor()}>
          Page title
        </h1>
        <p className={"mb-5 text-" + getTextColor()}>Page content</p>
        <button
          className={
            "bg-" +
            getTextColor() +
            " text-" +
            getBackgroundColor() +
            " p-3 rounded-md"
          }
        >
          Click here
        </button>
      </div>
      <div>
        <button onClick={changeTheme} className={"text-" + getTextColor()}>
          Change to {nextTheme}
        </button>
      </div>
    </div>
  );
}
