import { useReducer } from "react";

const style = {
	marginTop: '20px',
	fontSize: '30px',
	color: 'grey'
}
	
const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = ( state, { type , payload } ) => {
	switch(type){
	case 'InputNumChange':
	  	return { ...state, [payload.name]: payload.value} // 一見ブラケット記法とドット記法の論点が出てきそうだが、このケースは違う。オブジェクトのプロパティ名（キー）に変数を使う際は、ブラケットで囲む必要がある。
	case 'add':
		return { ...state, result: state.a + state.b }
	case 'minus':
		return { ...state, result: state.a - state.b }
	case 'divide':
		return { ...state, result: state.a / state.b }
	case 'multiply':
	  return { ...state, result: state.a * state.b }
	default:
		throw new Error('Unknown Type');
	}
}

const UseReducerAdvance = () => {
	const initState = {
		a: 1,
		b: 2,
		result: 3,
	};

const [state, dispatch] = useReducer(reducer, initState);

const calculate = (e) => {
	// console.log(e.target.value); // 出力: プルダウンメニューの項目が取れる	dispatch({type: e.target.value})
	dispatch({type: e.target.value})
	};

  const numChangeHandler = (e) => { // aとbのinputタグで同じイベントハンドラを使っているが、eのオブジェクトが異なるので、それを使い判別している。
	dispatch({type:'InputNumChange', payload: {name: e.target.name, value: parseInt(e.target.value)}}) //aの番号が変わるとpayloadに{ a: 5 }のようになる仕組み
	// typeにどのようなアクションを行うかを記述し、payloadに付加情報を記述するのが一般的
}

return (
	<>
	<h3 style={style}>UseReducer使用例2</h3>
	<p>useReducerを使って完成コードと同じ機能を作成してください。</p>
	<div>
		a:
		<input
		type="number"
		name="a"
		value={state.a}
		onChange={numChangeHandler}
		/>
	</div>
	<div>
		b:
		<input
		type="number"
		name="b"
		value={state.b}
		onChange={numChangeHandler}
		/>
	</div>
	<select value={state.type} onChange={calculate}>
		{CALC_OPTIONS.map( option => <option key={option} value={option}>{option}</option>)}
	</select>
	<h1>結果：{state.result}</h1>
	</>
);
};

export default UseReducerAdvance;