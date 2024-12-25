import React, { useState } from "react";

import { Button, Card } from "antd";
import {
    PlusOutlined,
    CheckOutlined
  } from '@ant-design/icons';



export default function Todo({ todo, onCheckButtonClick }) {

    const [check, setCheck] = useState(false);

    const handleButtonClick = (e) => {
        onCheckButtonClick(e.id);
        setCheck(!check);
    }

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
            <Button size="small" icon={<PlusOutlined />}></Button>
       </Card>
    );
}