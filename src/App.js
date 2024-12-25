
import { Input} from "antd";

import TodoList from "./components/TodoList";
import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid"
function App() {

  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect( () => {
    console.log(todoList) }, [todoList]
  )

  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  }

  const addTask = (e) => {
    if (e) {
      setTodoList((prevTodoList) => [
          ...prevTodoList,
          { id: v4(), name: textInput, isCompleted: false },
      ]);
      setTextInput(""); // Reset input field

  }

  }

  const onCheckButtonClick = useCallback((id) => {
    setTodoList(prevState => prevState.map(todo => todo.id === id? {...todo, isCompleted: !todo.isCompleted} : todo));
  }, [] );

  return (
    <>
      <h3> Todo List Tracker</h3>
      <div>
        <Input name="add-todo" 
        placeholder="Task you have to do" 
        style={{padding: "2px 4px 2px"}} 
        value={textInput} 
        onChange={(e) => onTextInputChange(e)} 
        onPressEnter={addTask}/>
      </div>
      <TodoList todoList = {todoList} onCheckButtonClick = {onCheckButtonClick} />
    </>
  );
}

export default App;
