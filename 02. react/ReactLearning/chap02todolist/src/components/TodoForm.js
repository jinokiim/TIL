
import React, {useState, useRef} from 'react'


function TodoForm(props) {
    
    const {addTodo} = props;
    const [text, setText] = useState('');
    const inputElem = useRef()


    const changeText = (evt) => {
        let data = evt.target.value;
        if(data.length < 10 ) {
            setText(data);
        } else {
            setText('');
        }
    };

    const sendData = (evt) => {
        evt.preventDefault();
        if(text.length !==0){
            addTodo(text)
        }
        // 입력후 input창 비우기
        setText('')
        inputElem.current.value = '';
    }

    return (
        <form>
            <div className="input-group">
                <input type="text" className="form-control"
                    value={text} onChange={changeText} ref={inputElem}/>       
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
                </div>
            </div>  
        </form>
    )

}
export default TodoForm