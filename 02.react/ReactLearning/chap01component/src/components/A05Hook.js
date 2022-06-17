
import React, {useEffect, useState, useRef, useCallback} from 'react'

const A05Hook = () => {

    const [data, setData] = useState({
        num: 0,
        str: '',
        name: ''
    });

    

    const [today, setToday] = useState(new Date());

    // 값이 유지되는 변수를 정의할 목적으로 사용
    const cnt = useRef(1);

    // DOM 객체를 참조할 목적으로도 사용한다
    const inputElem = useRef();


    // 3후에 시간찍기 -> 적절한 방법은 아님.
    // setTimeout( () => {
    //     setToday(new Date());
    // }, 3000); 

    // 처음 한번만 실행
    useEffect(() => {
        setTimeout (()=> {
            setToday(new Date());
        }, 3000);
    }, [data])

    useEffect(()=> {
        console.log(inputElem.current);         // JavaScript 객체
        inputElem.current.style.border = '1px solid orange';
    }, []);


    // 함수
    const changeData = useCallback((evt) => setData({...data, [evt.target.name]: evt.target.value}),[]);
    
    const increase = useCallback(() => {
        cnt.current++;
        console.log(cnt)
    },[]);  // [] 안에 값이 있으면 값이 변경될때마다 함수 사용 가능, 아니면 한번만 사용 가능

    const decrease = useCallback(() => {
        cnt.current--;
        console.log(cnt)
    },[]);

    const changeName = useCallback(() => 
    // setData함수를 이용해 data를 풀러서(...data) 그 안의 name값을 inputElem.curreng.value으로 변경
        setData( {...data, name: inputElem.current.value} )
    , [data]);

    



    return (
        <div>
            <h3>A05. useState, useEffect</h3>

            <div>
                Num: {data.num}
                    <input type="text" name="num" className="form-control"
                        defaultValue={data.num} onChange={changeData} /><br />

                Str: {data.str}
                    <input type="text" name="str" className="form-control"
                        defaultValue={data.str} onChange={changeData} /><br />

                {/* today를 표시하기 위해 toString() / toLocalTimeString() 붙여야함 */}
                Today: {today.toLocaleTimeString()}<br />
                <br />

                Cnt: {cnt.current}<br />
                <button className="btn btn-outline-primary btn-sm" onClick={increase}>+++</button><br />
                <button className="btn btn-outline-primary btn-sm" onClick={decrease}>---</button>

                <br />


                Avg: {data.name}
                    <div className="input-group">
                        <input type="text" name="str" className="form-control"  ref={inputElem}/>
                        <button className="btn btn-outline-primary btn-sm" onClick={changeName}>ADD</button>
                    </div>
                    
                    
            </div>
        </div>
    )
}

export default A05Hook
