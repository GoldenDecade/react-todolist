import React, {Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelTask = this.handleDelTask.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
    }

    handleDelTask() {
        const {delTask, index} = this.props;
        delTask(index);
    }
    handleDoubleClick() {
        const {index} = this.props;
        alert(index);
    }
    render(){
        const {task} = this.props;
        return (
            <div
                onClick={this.handleDelTask}
                onDoubleClick={this.handleDoubleClick}
            >{task}</div>
        )
    }
}
TodoItem.propTypes = {
    task: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
TodoItem.defaultProps = {
    task: 'hello'
}

export default TodoItem;