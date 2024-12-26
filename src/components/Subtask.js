import React, { useState } from "react";

export default function Subtask({subtask, onSubtaskClick}) {

    const [subtaskStatus, setSubtaskStatus] = useState(subtask.isCompleted)

    const handleSubtaskClick = (e) => {
        onSubtaskClick(e.id);
        setSubtaskStatus(!subtaskStatus);
        
    }

    return (
        <span onClick = {(e) => handleSubtaskClick(e)}>
            <p className={subtaskStatus? "subtask-completed" : "subtask-incompleted"}>
                {subtask.name}
            </p>
        </span>
    )
}