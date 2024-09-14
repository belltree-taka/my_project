// ここでの説明では、Child2コンポーネントにuseContextを使って、staetを渡す方法を説明する。
import React from 'react'
import Child2 from './Child2'
import { createContext, useState} from 'react'

// createContextは、コンポーネント外で記述し、エクスポートする。
// 一方で、useContextは、コンポーネント内で記述する(子コンポーネント側で)。


const MyContext = createContext()

const UseContextAdvance = (props) => {

    const [toggle, setToggle] = useState(true);
    const toggleHandler = () => {
        setToggle( prevstate => !prevstate )
    }

    return (
        <React.Fragment>
            {/*　↓ createContextで作成した変数でラップし、Providerをつけてからvalue属性を設定し、そこにグローバルに扱いたい値を入れる　*/}
            <MyContext.Provider value={[toggle, setToggle, toggleHandler]}>
                <Child2/>
            </MyContext.Provider>
        </React.Fragment>
    )
}

export { MyContext }
export default UseContextAdvance