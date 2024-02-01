"use client";

import { useState } from "react";

export default function Home() {
  const THEME = "THEME";
  const NEXT_THEME = "Dark";

  const [theme, setTheme] = useState(localStorage.getItem(THEME) ?? "Light");
  const [nextTheme, setNextTheme] = useState(
    localStorage.getItem(NEXT_THEME) ?? "Dark"
  );

  const changeTheme = () => {
    console.log(theme);
    if (theme === "Dark") {
      setTheme("Light");
      setNextTheme("Dark");
      localStorage.setItem(THEME, "Light");
      localStorage.setItem(NEXT_THEME, "Dark");
    } else {
      setTheme("Dark");
      setNextTheme("Light");
      localStorage.setItem(THEME, "Dark");
      localStorage.setItem(NEXT_THEME, "Light");
    }
  };

  const getTextColor = () => {
    return theme === "Dark" ? "white" : "black";
  };

  const getBackgroundColor = () => {
    return theme === "Dark" ? "black" : "white";
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
