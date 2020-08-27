// 先引入组件再引入样式
// 解构赋值
import React, {Component, Fragment} from 'react';
import TodoItem from "./TodoItem";

class Todolist extends Component {
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
        }), () => {
            const length = this.ul.current.querySelectorAll('div').length;
            // task 双击弹出index
            // console.log(this[`input${length - 1}`].current);
            this[`input${length - 1}`].current.handleDoubleClick();
        });
        console.log(this.ul);
    }
    handleInputChange(e) {
        // setState返回一个函数，而不是直接设置对象，性能会提升
        // 这样变成异步更新数据，此时要注意保存value
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));
    }
    getTodoItem() {
        return this.state.list.map((task, index) =>{
                    //这里这样写注释
                    return <TodoItem
                        task={task}
                        index={index}
                        delTask={this.delTask}
                        key={index}
                        ref={this[`input${index}`] = React.createRef()}
                    />
                })
    }
    render() {
        return (
            <Fragment>
                { /*这样写注释*/ }
                <div>
                    {/*这里这样写注释*/}
                    <label htmlFor="task">
                        任务：
                        <input
                            id="task"
                            className="red-border"
                            type="text"
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button onClick={this.handleClick}>提交</button>
                </div>
                <ul ref={this.ul = React.createRef()}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>

        )
    }
}
export default Todolist;