
import 'bootstrap/dist/css/bootstrap.css'

import TodoTemplate from './components/TodoTemplate'



function App() {
  return (
    <div className="container">
      <div className="coll-12 text-center">
        <h1>TodoList</h1>
      </div>

      <div className="coll-12">
        <TodoTemplate></TodoTemplate>

      </div>
    </div>
  );
}

export default App;
