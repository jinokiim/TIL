import {useState} from 'react'

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import A01Props from './components/A01Props'
import A02State from './components/A02State'
import A04CreateDOM from './components/A04CreateDOM'
import A05Hook from './components/A05Hook'
import A06Currency from './components/A06Currency';
import A07Style from './components/A07Style'
import A08StyleModule from './components/A08StyleModule';


function App() {

  // 이 변수는 변경되도 화면에 반영되지 않는 일반 변수
  // 변경 가능하게
  const [name, setName] = useState('jinho');
  // 이렇게는 변경이 불가
  let age = 29;
  const ary = [10, 11, 100];
  const obj = {
    name: 'Jinho',
    age: 29
  }
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`
  const changeAge = () => {
    age = 30;
    console.log(age)  // 내부적으로는 변경된다. 그러나 화면 갱신 조건을 갖지 못해 화면에서는 바뀌지 않음
  }
  const changeName = () => setName('진호');

  return (
    <div className="container">

<div className="col-12">
        <h1>A08StyleModule</h1>
      </div>
      <div className="col-12">
        <A08StyleModule></A08StyleModule>
        <hr />
      </div>



      <div className="col-12">
        <h1>A07 Style</h1>
      </div>
      <div className="col-12">
        <A07Style></A07Style>
        <hr />
      </div>


      <div className="col-12">
        <h1>A06 Currency</h1>
      </div>
      <div className="col-12">
        <A06Currency></A06Currency>
        <hr />
      </div>

      <div className="col-12">
        <h1>A05 Hook</h1>
      </div>
      <div className="col-12">
        <A05Hook></A05Hook>
        <hr />
      </div>


      <div className="col-12">
        <h1>A04 CreateDOM</h1>
      </div>
      <div className="col-12">
        <A04CreateDOM></A04CreateDOM>
        <hr />
      </div>


      
      <div className="col-12">
        <h1>A02 Component</h1>
      </div>

      <div className='col-12'>
        <A02State comp="A01 Props" name={name} age={age} ary={ary} obj={obj} 
        onAdd={onAdd} changeName={changeName} changeAge={changeAge}></A02State>
        <hr />
      </div>



      <div className="col-12">
        <h1>A01 Component</h1>
      </div>

      <div className="col-12">

        {/* 전달 값은 속성 형식으로 전달한다. ""로 묶지 않는다.(""로 묶는건 문자열을 전달) */}
        <A01Props comp="A01 Props" name={name} age={age} ary={ary} obj={obj} 
        onAdd={onAdd} changeName={changeName} changeAge={changeAge}></A01Props>
      
      </div>

    </div>
  );
}

export default App;
