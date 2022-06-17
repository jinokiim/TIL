import {useState, useRef} from 'react'

import React from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'



const makeTodo = () => {
    const todos = [];
    for(let i = 1; i <= 5; i++) {
        todos.push( {id: i, text: `${i}번째 할 일`, done: false} );
    }
    return todos;
}

const TodoTemplate = () => {

    const [todoList, setTodoList] = useState(makeTodo());
    

    // 함수
    const updataTodo = (id) => {
        const todos = todoList.map(todo => {
            // todo: {id: i, text: `${i}번째 할 일`, done: false}
            if(todo.id === id){
                return {...todo, done: !todo.done}
            } else {
                return todo
            }
        });
        setTodoList(todos)
    }
    
    // 삭제
    const deleteTodo = (id) => {
        const data = todoList.filter(todo => todo.id !== id ? true : false);
        setTodoList(data)
    }
    
    let cnt = useRef(6)
    const addTodo = (text) => {       // key value 가 같으면 생략 가능
        const todo = {id: cnt.current++, text: text, done: false}
        setTodoList(todoList.concat(todo));
    }





    return (
        <div>
            <h3>Todo List</h3>

            <TodoForm addTodo={addTodo} ></TodoForm>
            <hr />
            <TodoList todoList={todoList} updataTodo={updataTodo} deleteTodo={deleteTodo}></TodoList>

        </div>
    )
}
export default TodoTemplate;