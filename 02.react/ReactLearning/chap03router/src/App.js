import 'bootstrap/dist/css/bootstrap.css';
// npm i bootstrap@4
// npm un react-router  => 삭제
// npm i react-router@5 react-router-dom@5
// npm i react-loader-spinner

import { Route, Link, Switch, NavLink} from 'react-router-dom'

import A01FunctionProps from './components/A01FunctionProps'
import A02FunctionState from './components/A02FunctionState'
import A03Currency from './components/A03Currency'
import A04History from './components/A04History'
import A05MatchParam from './components/A05MatchParam'
import A06Arguments from './components/A06Arguments'
import A07ChildComponent from './components/A07ChildComponent'
import NotFoundComponent from './components/NotFoundComponent'


function App() {
  const user = {name: 'HungBu', age: 20};
  const ary = ['a', 'b', 'c'];
  const onPlus = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
  }

  const style = {color: 'orange', fontWeight: 'bold', backgroundColor: 'gray'}

  return (
    <div className="card-body">
      <h1>Router</h1>

      <div>
        <NavLink activeStyle={style} to="/">Index</NavLink> | {' '}
        <NavLink activeStyle={style} to="/props">Props</NavLink> | {' '}
        <NavLink activeStyle={style} to="/state">State</NavLink> | {' '}
        <Link to="/currency">Currency</Link> | {' '}
        <Link to="/history">History</Link> | {' '}
        <Link to="/params/5/data/Jinho">Params</Link> | {' '}
        <Link to="/params/3/data/Hungu">HungBu</Link> | {' '}
        <Link to="/args?no=5&name=Jinho&add=Suwon">Args</Link> | {' '}
        <Link to="/child">Child</Link> | {' '}
        <Link to="/abc">ABC</Link> | {' '}
      </div>
      <hr />

      {/* Route가 기술된 영역에 지정한 컴퍼넌트가 표시된다

      */}
      <Switch>
        <Route path="/"  exact={true}           render={ () => <div>
                                                                  <h1>Index Page</h1>
                                                                  <div>Hello World</div>
                                                                </div>} />
        {/* props로 값을 전달할 필요가 잇는 경우 */}
        <Route path="/props"     render={ () => <A01FunctionProps name="Jinho" age={20} arr={ary} user={user} onPlus={onPlus} isChecked={true} ></A01FunctionProps>} />

        {/* props의 값 전달 없이 순수하게 표시만 하는 경우는 component로 간단히 사용 */}
        <Route path="/state"    component={A02FunctionState} />
        <Route path="/currency"    component={A03Currency} />
        <Route path="/history"    component={A04History} />

        {/* path/:no -> no는 임의의 이름이 들어올 수 있는 path이름이 되면서 변수 역할을한다. */}
        <Route path="/params/:no/data/:name"    component={A05MatchParam} />

        {/* 주소줄에 ?no=5&Jinho&add=Suwon 형태로 전달. 여기서는 기술하지 않고 Link에서 기술 */}
        <Route path="/args"    component={A06Arguments} />


        <Route path="/child"    component={A07ChildComponent} />


          {/* 항상 맨 마지막에 기술한다. */}
        <Route path="/*"    component={NotFoundComponent} />

      </Switch>
    </div>
    
  );
}

export default App;