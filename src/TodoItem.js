import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
TodoItem.propTypes = {
    task: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
TodoItem.defaultProps = {
    task: 'hello'
}

export default TodoItem;