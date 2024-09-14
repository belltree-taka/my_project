import React from 'react';
import { useState } from 'react';

const Filter = (props) => {
    const animals = ['Dog', 'Cat', 'Rat'];
    const emptyMessage = '上の入力欄に何かしらのアニマルの名前を入力してね'
    const [val, setVal] = useState(emptyMessage)
    let noMatching;
    const filter = (e) => {
        if(e.target.value){
            const filteredVals = animals.filter((animal) => {
                return animal.indexOf(e.target.value) !== -1
            })
            if(filteredVals.length === 0){
                noMatching = '入力したアニマルは存在しません'
                setVal(<li>{noMatching}</li>)
            }else{
                const result = filteredVals.map(filteredVal => <li key={filteredVal}>{filteredVal}</li>)
                setVal(result)
            }
        }else{
            setVal(emptyMessage)
        }
    }
    {/*filterメソッドとmapメソッドはメソッドチェーンで繋げれる*/}
    const familyMembers = ['Takaharu', 'Ayako', 'Ben'];
    const valueWitha = familyMembers.filter(familyMember => familyMember.indexOf('a') !== -1
    ).map(familyMember => <li key={familyMember}>{familyMember}</li>)

    return(
        <React.Fragment>
            <p>Hello Filter Component</p>
            <p>配列のフィルター</p>
            <input type="text" onChange={filter}/>
            <ul>{val}</ul>
            {/* <ul>{valueWitha}</ul> */}
        </React.Fragment>
    )
}

export default Filter