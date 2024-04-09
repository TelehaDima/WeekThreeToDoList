import './App.css';
import { ToDoList } from './ToDoList';
import image from './to-do-list.jpg'

function App() {
  return (
    <div className='header'>
      <img src={image} width="400px" height="300px" alt='to do list' />
      <h1  className="container">My to do list</h1>
      <ToDoList/>
    </div>
  );
}

export default App;
