// import { React, useEffect, useState } from "react";
// import { ThemeContext, themes } from "../contexts/ThemeContext";

// const getTheme = () => {
//   const theme = `${window?.localStorage?.getItem("theme")}`;
//   if (Object.values(themes).includes(theme)) return theme;

//   const userMediaDark = window.matchMedia("(prefers-color-scheme: dark)");
//   const userMediaLight = window.matchMedia("(prefers-color-scheme: light)");

//   if (userMediaLight.matches) return themes.light;
//   if (userMediaDark.matches) return themes.dark;

//   return themes.userTheme;
// };

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(getTheme);

//   useEffect(() => {
//     document.documentElement.dataset.theme = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;
