import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])

const handlesubmit = (event) => {
  event.preventDefault();
  list.push(todo);
  setList([...list]);
  setTodo("");
}
const handledelete = (index) => {
  let newlist = [...list];
  newlist.splice(index,1)
  setList(newlist)

}
const handleupdate = (index) => {
  setTodo(list[index])
  let newlist = [...list];
  newlist.splice(index,1)
  setList(newlist)

}

  return (
    <div className='main-div'>
      <button className='dltall' onClick={() => setList([])}>Delete All</button>
    <form onSubmit={handlesubmit}>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value) } />
      <button type='submit'>Submit</button>
    </form>

{list.map((item, index) => (
  <div className='fun-div' key={index}>
  <p>{item}</p>
  <button onClick={() => handledelete(index)}>Delete</button>
  <button onClick={() => handleupdate(index)}>Update</button>
  </div>
))}
    </div>
  );
}

export default App;
