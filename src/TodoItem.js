import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelTask = this.handleDelTask.bind(this);
    }

    handleDelTask() {
        const {delTask, index} = this.props;
        delTask(index);
    }
    render(){
        const {task} = this.props;
        return (
            <div onClick={this.handleDelTask}>{task}</div>
        )
    }
}
export default TodoItem;