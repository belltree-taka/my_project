// ↓ useContextを返す関数をそれぞれuseThemeContext、useThemeUpdateContextとしてコンテキストファイル（ThemeContext,jsx）で定義しているので
//　useContextのインポートは不要になる。

import React, { useContext } from "react";
import { ThemeContext, useThemeContext} from "./Context/ThemeContext";

const Main = (props) => {
  const themeStatus = useThemeContext() // ThemeContext.jsxの⭐️部分の説明を参照。この方法なら上記のuseContextとThemeContextのインポート文が省略可能
  return (
    <React.Fragment>
      <main className={`content-${themeStatus}`}>
        <h1>テーマの切り替え</h1>
      </main>
    </React.Fragment>
  );
};

export default Main;
