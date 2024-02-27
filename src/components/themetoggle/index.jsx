import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const [isAnimating, setIsAnimating] = useState(false);

  const themetoggle = () => {
    setIsAnimating(true);
    settheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const animationConfig = {
    initial: { opacity: 1, scale: 0.9 },
    animate: { opacity: 1, scale: 0.6 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { duration: 0.1 },
  };

  return (
    <motion.div
      className="nav_ac"
      onClick={themetoggle}
      initial="initial"
      animate={isAnimating ? "animate" : "initial"}
      exit="exit"
      onAnimationComplete={() => setIsAnimating(false)}
      variants={animationConfig}
    >
      {theme === "dark" ? (
        <div className="checked" style={{marginTop:'5px'}}>
          <SunIcon fontSize={20} />
        </div>
      ) : (
        <div className="checked" style={{marginTop:'5px'}}>
          <MoonIcon fontSize={20} />
        </div>
      )}
    </motion.div>
  );
};

export default Themetoggle;
