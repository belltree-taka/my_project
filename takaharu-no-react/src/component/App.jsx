import React from "react";
import { useState } from "react";
import Component from "./Component.jsx";
import "../reset.css";
import "../App.css";
import Part from "./Part.jsx";
import Functional from "./Functional.jsx";
import List from "./List.jsx";
import Container from "./Container.jsx";
import Content1 from "./Content1.jsx";
import Content2 from "./Content2.jsx";
import ObjSet from "./ObjSet.jsx";
import EventListener from "./EventListener.jsx";
import MyTest from "./MyTest.jsx";
import Count from "./Count.jsx";
import ObjectState from "./ObjectState.jsx";
import Array from "./Array.jsx";
import SimpleCount from "./SimpleCount.jsx";
import SimpleCount2 from "./SimpleCount2.jsx";
import ArrayToList from "./ArrayToList.jsx";
import Filter from "./Filter.jsx";
import FormTags from "./FormTags.jsx";
import PullDown from "./PullDown.jsx";
import TodoApp from "./TodoApp.jsx";
import Style from "./Style.jsx";
import CreatePortal from "./CreatePortal.jsx";
import UseRef from "./UseRef.jsx";
import ForwardRef from "./ForwardRef.jsx";
import UseImperativeHandle from "./UseImperativeHandle.jsx";
import UseReducerBasic from "./UseReducerBasic.jsx";
import UseReducerAdvance from "./UseReducerAdvance.jsx";
import UseContextBasic from "./UseContextBasic.jsx";
import UseContextAadvance from "./UseContextAdvance.jsx";
import UseContextPracticalUse from "./UseContextPracticalUse.jsx";
import UseEffect from "./UseEffect";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: "今日は" };
  }
  handle(arg) {
    this.setState({ date: arg });
  }
  render() {
    const fn = (arg) => `Hello ${arg}`;
    const obj = { name: "Takaharu", age: 34 };
    const objSet = [
      { name: "Takaharu", age: 34 },
      { name: "Ayako", age: 47 },
      { name: "Ben", age: 7 },
    ];
    const a = "プロップス";
    return (
      <React.Fragment>
        <Component a={a} />
        <TodoApp />{" "}
        {/*カスタムしたtodoアプリ。同じプロパティ名を保持する重複オブジェクトの検知機能を実装*/}
        {/*===============================
          以下は通常のpropの説明
          <コンポーネント名
            プロパティ名: 値
          />
        ================================*/}
        <Part
          color="red"
          fn={fn}
          myObj={{ type: "Object", name: "myObj" }}
          {...obj}
        />
        {/*===============================
          ↑{...obj}の記述だけで下記を省略できる
          name = obj.name
          age = obj.age

          ※PartコンポーネントでmyObjは使っていないので、戸惑わないように
          単純にprops経由でオブジェクトをこんな風に渡せるよというのを
          見せたかっただけ。
        ================================*/}
        <Functional name="functional" />
        <List />
        {/*========================================================
          以下はchildrenプロパティの説明
          誤解しやすいがchildrenプロパティを実際に使うのは、
          子コンポーネントではなく「親コンポーネント側」

          ①コンポーネントの閉じタグを書いてサンドイッチする場合
          親コンポーネント側でprop.childrenで🌟の部分にアクセスできる
          <コンポーネント名>
            🌟<投げたい子コンポーネント名 {...オブジェクト}/>
          <コンポーネント名/>
          ※🌟の行の記述は、JSXを利用した裏技的な記法
          通常は以下のように、スプレッド演算子を使ってオブジェクトのシャローコピーができる

          const obj = {prop: 'value'}
          const cloneObj = {...obj}

          JSXの中では値は{}で囲まないといけないというルールを利用して、本来は...objのように
          裸で使えない記述が許容される。

          {...オブジェクト}の部分が投げたい子コンポーネントのpropsの指定になる。


          ②chilren属性として子コンポーネントを投げるなら、配列に子コンポーネントを格納する。
          <親コンポーネント名 children={[投げたい子コンポーネント名 key={キー名} {...オブジェクト}]}/>
        =========================================================*/}
        {/*①*/}
        <Container>
          <Content1 {...objSet[0]} />
          {/*↑↑↑上記の内容と下記の内容は同じ*/}
          {/* <Content1 name ="Takaharu" age="34"/> */}
          <Content2 {...objSet[1]} />
        </Container>
        {/*===============================*/}
        {/*②*/}
        <Container
          children={[
            <Content1 key={objSet[0].name} {...objSet[0]} />,
            <Content2 key={objSet[1].name} {...objSet[1]} />,
          ]}
        />
        {/*===============================*/}
        {/*当然propsの指定は通常通り以下のようにできる*/}
        <Container>
          <Content1 name="poop" age="0" />
          <Content2 name={"うんこ"} age={1} />
        </Container>
        {/*=================================================
          childrenプロパティは、コンポーネント以外にもオブジェクトや
          プリミティブ値などのデータを渡すことにも使えるが、通常のprops
          で同じことが実現できるので、敢えてこの方法を取ることはなさそう
        ==================================================*/}
        <ObjSet>{objSet[0]}</ObjSet>
        <ObjSet>{{ name: "Ben", age: 7 }}</ObjSet>
        <ObjSet children={{ ...objSet[0] }} />
        <ObjSet children={{ name: "Ben", age: 7 }} />
        {/*=============================================
          属性の機能を使って子コンポーネントを渡すこともできる
          下記のfirst属性は子コンポーネントを一つしか渡していないが
          配列で二つ以上のコンポーネントを渡すことも可能。
          こうなってくると、childrenプロパティって何が特別なのか
          わからなくなってくるが、唯一特殊性を見出せる点が親コンポーネントの閉じタグを
          使って子コンポーネントをサンドイッチした場合にchildrenに関連する
          特別な記述がなくても親コンポーネントでchildrenプロパティを
          指定できることぐらい。
        ==============================================*/}
        <Container first={<Content1 key={objSet[0].name} {...objSet[0]} />} />
        <EventListener /> {/*各種イベントとuseStateの基礎知識*/}
        <MyTest /> {/*ただの練習スペース*/}
        <Count /> {/*useStateが非同期で動作することとprevstateの動作原理*/}
        <ObjectState />{" "}
        {/*stateにオブジェクトを設定する時は、スプレッド演算子を使ってオブジェクトをコピーし、別のオブジェクトを更新関数の引数にあてがう*/}
        <Array />{" "}
        {/*配列もオブジェクト同様に同じ配列オブジェクト（参照が同じ）でstate値を更新できない*/}
        <SimpleCount />{" "}
        {/*Reactのstate管理はツリーの位置でおこなわる。toggleと三項演算子を使った説明*/}
        <SimpleCount2 />{" "}
        {/*親コンポーネントのstateを利用し、消滅する子コンポーネントのstate状態を保持する方法*/}
        <ArrayToList /> {/*mapメソッドを使った配列をJSXに変換する方法*/}
        <Filter />{" "}
        {/*filterメソッドとindexOfメソッドを用いたinput内容のフィルタリング*/}
        <FormTags />{" "}
        {/*ラジオボタンやチェックボックスなどのinput要素とmapメソッドの組み合わせ（かなり内容がコア）*/}
        <PullDown /> {/*プルダウンメニューの使い方*/}
        <Style /> {/*スタイルの適用方法*/}
        <CreatePortal /> {/*ポータルの使い方*/}
        <UseRef />{" "}
        {/*Reactで直接DOM要素の操作をする。主にインプット要素の操作にuseRefを使う*/}
        <ForwardRef /> {/*他のコンポーネントからuseRefを使ってDOM操作をする*/}
        <UseImperativeHandle />{" "}
        {/*useImperativeHandleを使ってDOM操作の内容を限定し、開発者の意図に反した挙動を回避する*/}
        <UseReducerBasic /> {/*useReducerの基本的な説明*/}
        <UseReducerAdvance /> {/*useReducerの実践的な使い方*/}
        <UseContextBasic /> {/*propsのバケツリレーを回避する*/}
        <UseContextAadvance />
        {/*UseContextの実践的な使い方*/}
        <UseContextPracticalUse />
        {/*UseContextの弱点を補強した使い方*/}
        {/* <UseEffect/> */}
      </React.Fragment>
    );
  }
}

export default App;
