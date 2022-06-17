// A01Props.js
// 단축키 rfce

import React from 'react'

function A01Props(props) {          // props는 react가 주입해주는 참조변수
    const {comp, name, age, ary, obj, onAdd, changeAge, changeName, num} = props;  // 이렇게 하면 21 ~ 29 줄처럼 prop. 생략후 작성 가능
    
    return (
        <div>
            <h3>A01 Props Component</h3>
            <div>
                comp: {props.comp}<br/>
                name: {props.name}<br/>
                age: {props.age + 100}<br/>
                Array: {props.ary[0]} / {props.ary[1]} / {props.ary[5]}<br/>
                Object: {props.obj.name} / {props.obj.age} / {props.obj.address}<br/>
                onAdd: {props.onAdd(10, 20)}<br/>
                num: {props.num * 100}<br/>
                <button className="btn btn-primary btn-sm" onClick={changeName}>Change Name</button><br/>
                <button className="btn btn-danger btn-sm" onClick={changeAge}>Change Age</button><br/>
            </div>
<hr/>
            <div>   {/* // const {comp, name, age, ary, obj, onAdd} = props; */}
                comp: {comp}<br/>
                name: {name}<br/>
                age: {age + 100}<br/>
                Array: {ary[0]} / {ary[1]} / {ary[5]}<br/>
                Object: {obj.name} / {obj.age} / {obj.address}<br/>
                onAdd: {onAdd(10, 20)}<br/>
                num: {num * 100}<br/>
                <button className="btn btn-primary btn-sm" onClick={changeName}>Change Name</button><br/>
                <button className="btn btn-danger btn-sm" onClick={changeAge}>Change Age</button><br/>
            </div>
        </div>
    )
}

export default A01Props

A01Props.defaultProps = {
    num: 1000
}