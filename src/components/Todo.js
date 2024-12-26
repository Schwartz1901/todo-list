import React, { useCallback, useState } from "react";

import { Button, Card , Input} from "antd";
import {
    PlusOutlined,
    CheckOutlined
  } from '@ant-design/icons';
import { v4 } from "uuid";
import SubtaskList from "./SubtaskList";






export default function Todo({ todo, onCheckButtonClick }) {

    const [check, setCheck] = useState(todo.isCompleted);

    const [addButtonClick, setAddButtonClick] = useState(false);

    const [textInput, setTextInput] = useState("");

    const [subtaskList, setSubtaskList] = useState([]);



    const handleButtonClick = (e) => {
        onCheckButtonClick(e.id);
        setCheck(!check)
    }

    const handleAddButtonClick = () => {
        setAddButtonClick(true);
    }

    const onTextInputChange = (e) => {
        setTextInput(e.target.value);
    }

    const addSubtask = (e) => {
        if (e) {
            setSubtaskList((prevSubtask) => [...prevSubtask, {id: v4(), name: textInput, isCompleted: false}])
        }

        setAddButtonClick(false);
        setTextInput("")
    }
    
    const onSubtaskClick = useCallback((id) => {
        setSubtaskList(prevSubtask => prevSubtask.map(subtask => subtask.id === id? {...subtask, isCompleted: !subtask.isCompleted} : subtask))
    }, []);

    return (
       <Card 
       title={todo.name} 
       extra={
        <Button 
        className="check-button" 
        icon={check? (<span className="check-icon-enable" ><CheckOutlined style={{color: "green"}} /> </span>) : (<span className="check-icon" ><CheckOutlined style={{color: "green"}} /> </span>)}
        onClick={() => handleButtonClick(todo)}
        />} 
        >

            <SubtaskList subtaskList = {subtaskList} onSubtaskClick={onSubtaskClick}/>

            {addButtonClick && 
            <span>
                <Input  
                    style={{padding: "2px 4px 2px"}}
                    value = {textInput}
                    onChange={(e) => onTextInputChange(e)}
                    onPressEnter={addSubtask}


                />
            </span>}
            <Button size="small" icon={<PlusOutlined />} onClick={(e) => handleAddButtonClick(e)} ></Button>
       </Card>
    );
}