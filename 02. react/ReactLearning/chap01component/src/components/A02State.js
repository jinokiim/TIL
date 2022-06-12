// A02State.js


import React, { useState } from 'react'

function A02State(props) {
    // props는 읽기 전용 변수이다. 여기서 변경할 수 없다.
    const {name, age} = props;

    // 이 state에서만 사용할 내부 변수(변경되어도 화면 갱신은 이루어지지 않음)
    const nick = '흥부'
    
    // 이 state에서만 사용할 내부 변수(변경되면 화면 갱신은 이루어지진다.)
    // import React, { useState } from 'react' 와 같이 import 된다.
    // const[변수명, 변수를 변경할 함수명] = useState(초기화값)

    // 변수명으로는 값을 수정할 수 없다. 수정은 항상 같이 기술한 함수로 변경
    const [user, setUser] = useState('방자');
    const [num, setNum] = useState(18);
    const [check, setCheck] = useState(true);
    const [arr, setArr] = useState( [100, 111, 1000] );
    const [obj, setObj] = useState({
        name: 'HangDan',
        age: 20
    });

    // 변경 관련 함수
    const changeUser = (evt) => setUser('BangJa');
    const changeNum = (n) => setNum(n);
    const changeCheck = () => setCheck(!check);

    // 배열 조작(리퍼런스 형)
    const addArray = () => {
        const num = Math.ceil(Math.random()*100);
        // setArr(arr.push(num));  // error
        // 배열을 변경하거나 새로운것을 추가할땐 concat
        setArr(arr.concat(num))
    }
    
    const updateArray = (index, value) => {
        // setArr(arr[index] = value); //error
        
        // 한줄로 적으면
        // const data = arr.map((item, i) => index === i ? value : item)
        const data = arr.map((item, i) => {
            if(index === i) return value;
            else return item
        });
        setArr(data);
    }

    const deleteArray = (index) => {
        const data = arr.filter((item, i) => index !== i ? true : false)
        setArr(data);
    }

    // object 관련
    const addObject = (key, value) => {
        // obj[key] = value;
        const data = {...obj, [key]: value};
        setObj(data);
    }

    const updateObject = (key, value) => {
        const data = {...obj, [key]: value};
        setObj(data);
    }

    
    const deleteObject = (key) => {
        delete obj[key];
        const data = {...obj}
        setObj(data);
    }

    
    

    return (
        <div>
            <h3>A02 State</h3>

            <div>
                props: {name} / {age} <br/>
                Normal Var: {nick} <br/>
            </div>  
            <br/>
            <div>
                User: {user}    <br/>
                Num: {num}  <br/>
                {/* true, false값은 화면에 표시되지 않는다. 삼항연산자를 이용하면 표시 가능 */}
                Check: {check ? '동의' : '동의안함'}  <br/>
                Array: {arr[0]} / {arr[1]} / {arr[5]} /<br/>
                Object: {obj.name} / {obj.age} / {obj.address}  <br/>
            </div>

            <div>
                {arr.map((item, index) => <span key={index}>{item} </span>)}
            </div>

            <div>
                <button className="btn btn-primary btn-sm" onClick={changeUser}>User</button>
                                                        {/* evt가 실행하면서 changeNum(28)을 값으로 받는다 */}
                <button className="btn btn-primary btn-sm" onClick={(evt) => changeNum(28)}>Num</button>
                <button className="btn btn-primary btn-sm" onClick={changeCheck}>Check</button> <br/><br/>

                <button className="btn btn-primary btn-sm" onClick={addArray}>Add Array</button>
                                                                    {/* index 1 을 200으로 업데이트 */}
                <button className="btn btn-primary btn-sm" onClick={() => updateArray(1, 200)}>Updata Array</button>
                                                                            {/* index 0 을 삭제 */}
                <button className="btn btn-primary btn-sm" onClick={() => deleteArray(0)}>Delete Array</button><br/><br/>

                <button className="btn btn-primary btn-sm" onClick={() => addObject('address', 'Seoul')}>Add Object</button>
                <button className="btn btn-primary btn-sm" onClick={() => updateObject('address', 'Busan')}>Updata Object</button>
                <button className="btn btn-primary btn-sm" onClick={() => deleteObject('address')}>Delete Object</button><br/><br/>

            </div>
        </div>
        
    )
}

export default A02State
