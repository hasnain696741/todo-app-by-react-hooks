import { useRef, useState } from 'react';
import deleteimg from '../assests/delete.png';
import editimg from '../assests/editimage.jpg';
import submitimg from '../assests/submit.png';
function Todo() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])
  const inputRef = useRef()
const handlesubmit = (event) => {
  event.preventDefault();
  list.push(todo);
  setList([...list]);
  setTodo("");
}
const handledelete = (index) => {
//   let newlist = [...list];
  list.splice(index,1)
  setList([...list])

}
const handleedit = (index) => {
 const value = list[index]
 setTodo(value)
 list.splice(index, 1);
 setList([...list]);
 inputRef.current.focus();

}

  return (
    <div className='main-div'>
    <h1>Todo Web</h1>
     <img className='dltall' onClick={() => setList([])} src={deleteimg} alt="delete all" />
    <form onSubmit={handlesubmit}>
      <input type="text" value={todo} required  ref={inputRef} onChange={(e) => setTodo(e.target.value) } />
      <button className='btn-submit' type='submit'><img src={submitimg} alt="submit" /></button>
      
    </form>

{list.map((item, index) => (
  <div className='fun-div' key={index}>
  <p>{item}
  <img className='img-image' src={deleteimg} alt="delete" onClick={() => handledelete(index)} />
  <img className='img-image' src={editimg} alt="edit" onClick={() => handleedit(index)} />
  </p>
  </div>
))}
    </div>
  );
}

export default Todo;
