function TodoList (props) {
  console.log(props);
  const todo = props.todo;
  return (
    <ul>
      {
        todo.map((item)=>(
          <li key={item.id}>{item.text}</li>
        ))
      }
    </ul>
  )
}
export default function Practice05 () {
  const todo = [
    {id:1,text:'todo1'},
    {id:2,text:'todo2'},
    {id:3,text:'todo3'},
    {id:4,text:'todo4'},
  ]
  
  return <TodoList todo={todo}></TodoList>
}
