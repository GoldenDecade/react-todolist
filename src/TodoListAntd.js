import React, { Component, Fragment } from 'react';
import store from './store';
import {getInputChangeAction, getAddItemAction, getDelItemAction} from './store/actionCreator'
import { Button, Input, List } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'antd/dist/antd.css';

class TodoListAntd extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.delTask = this.delTask.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    delTask(index) {
        // immutable（ 永恒不变的）: state 不允许我们做任何的改变; 如果直接改state，会有性能问题
        /*this.setState((prevState) => {
            let list = prevState.list;
            list.splice(index, 1);
            return {
                list
            }
        });*/
        /*store.dispatch({
            type: DEL_TODO_ITEM,
            index
        });*/
        const action = getDelItemAction(index);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleClick(e) {
        // this.setState 第一个参数 prevState，相当于改变之前的state
        /*this.setState((prevState) =>({
            // 展开运算符
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));*/
        /*store.dispatch({
            type: ADD_TODO_ITEM,
            value: this.state.inputValue
        });*/
        const action = getAddItemAction(this.state.inputValue);
        store.dispatch(action);
    }
    handleInputChange(e) {
        // setState返回一个函数，而不是直接设置对象，性能会提升
        // 这样变成异步更新数据，此时要注意保存value
        /*const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));*/
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
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
                    header={<div>Today Task</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item onClick={this.delTask.bind(this, index)}>{item}</List.Item>}
                />
            </Fragment>
        )
    }
}

export default TodoListAntd;