import React from "react";

import Todo from "./Todo";
export default function TodoList({ todoList , onCheckButtonClick}) {
    return(
        <>
            {
                todoList.map(todo => <Todo key={todo.id} todo={todo} onCheckButtonClick = {onCheckButtonClick}/>)
            }
        </>
    );
}