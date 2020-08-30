import React, { Component, Fragment } from 'react';
import { Button, Input, List } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'antd/dist/antd.css';

class TodoListAntd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.delTask = this.delTask.bind(this);
    }
    delTask(index) {
        // immutable（ 永恒不变的）: state 不允许我们做任何的改变; 如果直接改state，会有性能问题
        this.setState((prevState) => {
            let list = prevState.list;
            list.splice(index, 1);
            return {
                list
            }
        });
    }
    handleClick(e) {
        // this.setState 第一个参数 prevState，相当于改变之前的state
        this.setState((prevState) =>({
            // 展开运算符
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
    }
    handleInputChange(e) {
        // setState返回一个函数，而不是直接设置对象，性能会提升
        // 这样变成异步更新数据，此时要注意保存value
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));
    }
    render() {
        return (
            <Fragment>
                { /*这样写注释*/ }
                <div>
                    {/*这里这样写注释*/}
                    <label htmlFor="task">
                        任务：
                        <Input
                            id="task"
                            style={{"width": "200px", "marginRight": "10px"}}
                            type="text"
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <Button
                        type="primary"
                        onClick={this.handleClick}>提交</Button>
                </div>
                <List
                    size="large"
                    header={<div>Today Task</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </Fragment>
        )
    }
}

export default TodoListAntd;