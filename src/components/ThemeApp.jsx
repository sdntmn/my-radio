import React, { useState, useEffect } from "react";
import { theme } from "../data/themes";
// import { ReactComponent as MoonIcon } from "../images/moon-svgrepo-com.svg";
// import { ReactComponent as SunIcon } from "../images/sun-svgrepo-com.svg";
//import { ThemeContext, themes } from "../src/providers/ThemeProvider.jsx";

const ThemeApp = () => {
  // Тема браузера темная или светла (темная - true , светлая - false)
  console.log(theme);

  const defaultTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Получение данных об установленной теме в лс
  let themeSave = JSON.parse(localStorage.getItem("themeSave"));

  // Записываем в state полученную name темы или устанавливаем пусто
  const [isThemeApp, setIsThemeApp] = useState(themeSave || "");

  useEffect(() => {
    localStorage.setItem("themeSave", JSON.stringify(isThemeApp));
  }, [isThemeApp]);

  // если тема пусто записываем name темы в зависимости от темы установленной в браузере
  useEffect(() => {
    if (isThemeApp.length === 0) {
      localStorage.setItem(
        "themeSave",
        JSON.stringify(defaultTheme ? "dark" : "light")
      );
    } else {
      setIsThemeApp(JSON.parse(localStorage.getItem("themeSave")));
    }
  }, [defaultTheme, isThemeApp]);

  console.log(isThemeApp);

  const {
    name,
    colorPrimary,
    white,
    colorLike,
    scrollbarColor1,
    scrollbarColor2,
    scrollbarTrack,
    scrollbarThumbBg,
    scrollbarThumbBorder,
    buttonVolumeColor1,
    buttonVolumeColor2,
    buttonDelete,
    extFooter,
    radioList__Title,
    textMainTitle,
    popupBg,
    boxShadow,
    boxShadow2,
    sliderVolume__inputBg,
    sliderVolume__tickColor,
  } = theme;

  useEffect(() => {
    const docEl = document.documentElement;
    for (let elem of theme) {
      // if (elem.name === "default") {
      //   console.log(elem);
      //   console.log(elem.white);
      //   docEl.style.setProperty("--colorPrimary", elem.colorPrimary);
      //   docEl.style.setProperty("--white", elem.white);
      //   docEl.style.setProperty("--colorLike", elem.colorLike);
      //   docEl.style.setProperty("--scrollbarColor1", elem.scrollbarColor1);
      //   docEl.style.setProperty("--scrollbarColor2", elem.scrollbarColor2);
      //   docEl.style.setProperty("--scrollbarTrack", elem.scrollbarTrack);
      //   docEl.style.setProperty("--scrollbarThumbBg", elem.scrollbarThumbBg);
      //   docEl.style.setProperty(
      //     "--scrollbarThumbBorder",
      //     elem.scrollbarThumbBorder
      //   );
      //   docEl.style.setProperty(
      //     "--buttonVolumeColor1",
      //     elem.buttonVolumeColor1
      //   );
      //   docEl.style.setProperty(
      //     "--buttonVolumeColor2",
      //     elem.buttonVolumeColor2
      //   );
      //   docEl.style.setProperty("--buttonDelete", elem.buttonDelete);
      //   docEl.style.setProperty("--textFooter", elem.textFooter);
      //   docEl.style.setProperty("--radioList__Title", elem.radioList__Title);
      //   docEl.style.setProperty("--textMainTitle", elem.textMainTitle);
      //   docEl.style.setProperty("--popupBg", elem.popupBg);
      //   docEl.style.setProperty("--boxShadow", elem.boxShadow);

      //   docEl.style.setProperty(
      //     "--sliderVolume__inputBg",
      //     elem.sliderVolume__inputBg
      //   );
      //   docEl.style.setProperty(
      //     "--sliderVolume__tickColor",
      //     elem.sliderVolume__tickColor
      //   );
      //}
      //   console.log(22);
      console.log(elem);
    }
  }, [isThemeApp, name]);

  const [isEnabled, setIsEnabled] = useState(false);
  // const updateTheme = (isDarkEnabled) => {
  //   if (isDarkEnabled) {
  //     docEl.style.setProperty("--background", colorPrimary);

  //     document.querySelector("html").classList.add("darkmode");
  //   } else {
  //     docEl.style.setProperty("--foreground", colorPrimary);
  //     document.querySelector("html").classList.remove("darkmode");
  //   }
  // };

  /*
   * Read the blog post here:
   * https://letsbuildui.dev/articles/building-a-dark-mode-theme-toggle
   */

  // useEffect(() => {
  //   updateTheme(isEnabled);
  // }, [isEnabled]);

  // const toggleTheme = () => {
  //   setIsEnabled((isEnabled) => !isEnabled);
  // };

  const [value, setValue] = useState("");

  // function changeValue() {
  //   if (value === "light") {
  //     setValue("dark");
  //   } else {
  //     setValue("light");
  //   }
  // }
  return (
    <>
      <div>
        <fieldset>
          <legend>Темы по умолчанию</legend>
          <input
            id='themeLight'
            className='themeApp__input'
            type='radio'
            name='changeTheme'
            value='light'
            checked={value === "light" ? true : false}
            // onChange={changeValue}
          />
          <label className='themeApp__hidden'>Светлая тема </label>
          <div className='themeApp__icons'>
            <input
              id='themeDark'
              className='themeApp__input'
              type='radio'
              name='changeTheme'
              value='dark'

              // onChange={changeValue}
            />

            <label className='themeApp__hidden'>Темная тема</label>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default ThemeApp;
