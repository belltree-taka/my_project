// ↓ useContextを返す関数をそれぞれuseThemeContext、useThemeUpdateContextとしてコンテキストファイル（ThemeContext,jsx）で定義しているので
//　useContextのインポートは不要になる。
import React, { useContext } from "react";
import { ThemeContext, useThemeContext, useThemeUpdateContext} from "./Context/ThemeContext";

const THEMES = ["light", "dark", "red"];

const Header = (props) => {
  const themeStatus = useThemeContext();
  const dispatch = useThemeUpdateContext();
  const clickHandler = (e) => {
    dispatch({ type: "STATE_UPDATE", payload: e.target.value });
  };
  return (
    <React.Fragment>
      <header className={`content-${themeStatus}`}>
        {THEMES.map((theme) => {
          return (
            <React.Fragment key={theme}>
              <input
                id={theme}
                type="radio"
                value={theme}
                onChange={clickHandler}
                checked={theme === themeStatus}
              />
              <label htmlFor={theme}>{theme}</label>
            </React.Fragment>
          );
        })}
      </header>
    </React.Fragment>
  );
};

export default Header;
