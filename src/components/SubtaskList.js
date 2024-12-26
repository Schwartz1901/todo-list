import React from "react";
import Subtask from "./Subtask";

export default function SubtaskList({subtaskList, onSubtaskClick}) {

    return (
        <>
            {
                subtaskList.map(subtask => <Subtask key = {subtask.id} subtask={subtask} onSubtaskClick = {onSubtaskClick}/>)
            }
        </>
    )
}
