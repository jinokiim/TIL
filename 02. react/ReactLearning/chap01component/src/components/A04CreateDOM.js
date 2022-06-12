
import React, { useState } from 'react'

// 함수 밖으로 빼주어 리렌더링되는것을 막아준다.
let cnt = 4;

function A04CreateDOM() {
    const baseArray = ['NC', '두산', '엘지', 'KT', '키움'];

    const [baseObject, setBaseObject] = useState([
        {id: 1, team: 'NC', value: 'NC'},
        {id: 2, team: '두산', value: 'Doosan'},
        {id: 3, team: '엘지', value: 'LG'},
    ]);

    const [data, setData] = useState({
        teamOne: '',
        teamTwo: '',
        isChecked: false,
    });

    const changeTeam = (evt) => setData( {...data, [evt.target.name]: evt.target.value} );
    const addArray = () => baseArray.push('한화');
                                    // data를 풀고 data.isChecked 를 반대로 입력
    const showHide = () => setData( {...data, isChecked: !data.isChecked})

    
    const addTeam = () => {
        const data = {id: cnt++, team: '한화', value: 'Hanhwa'};
        setBaseObject(baseObject.concat(data));
    }


    return (
        <div>
            <h3>A04 Make DOM</h3>
            
            SelectBox: {data.teamOne}<br/>
                                                {/* onChange 가 발생하면 changeTeam 메서드 발생 */}
            <select name="teamOne" className="form-control" onChange={changeTeam}>
                <option>선택해주세요</option>
                {/* 
                    {} 구문은 for, while, if 등의 제어문 기술 불가.
                    map, filter는 가능.(함수이기 때문)
                    동적 돔 만들기
                */}
                {baseArray.map((item, index) => <option key={index}>{item}</option>)}
            </select>

            SelectBox: {data.teamTwo}<br/>
            <select name="teamTwo" className="form-control" onChange={changeTeam}>
                <option value="">선택해주세요</option>
                {baseObject.map(item => {
                    return <option value={item.value} key={item.id}>{item.team}</option>
                })}
                
            </select>

            <table className="table">
                <thead>
                    <tr>
                        <th>NO</th><th>Team</th><th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    { baseObject.map((item) => {
                        // return은 항상 단일태그!
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.team}</td>
                                <td>{item.value}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            { data.isChecked && 
                <div className="input-group">
                    <input type="text" className="form-control" />
                    <button className="btn btn-outline-primary btn-sm" onClick={addArray}>ADD</button>
                </div>
            }
            <br />
            
            <button className="btn btn-outline-primary btn-sm" onClick={addTeam}>ADD TEAM</button>
            <button className="btn btn-outline-primary btn-sm" onClick={showHide}>{data.isChecked ? 'HIDE' : 'SHOW'}</button>
        </div>
    )
}

export default A04CreateDOM
