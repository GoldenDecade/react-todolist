import React from 'react';
import { Button, Input, List } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'antd/dist/antd.css';

// 无状态组件
export default (props) => {
    return (
        <>
            { /*这样写注释*/ }
            <div>
                {/*这里这样写注释*/}
                <label htmlFor="task">
                    任务：
                    <Input
                        id="task"
                        style={{"width": "200px", "marginRight": "10px"}}
                        type="text"
                        value={props.inputValue}
                        onChange={props.handleInputChange}
                    />
                </label>
                <Button
                    type="primary"
                    onClick={props.handleClick}>提交</Button>
            </div>
            <List
                header={<div>Today Task</div>}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                        <List.Item
                            onClick={() => {props.delTask(index)}}
                        >{item}</List.Item>
                    )
                }
            />
        </>
    );
};