import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      {theme === "dark" ? <div className="checked"><SunIcon/></div> : <MoonIcon />}
    </div>
  );
};

export default Themetoggle;