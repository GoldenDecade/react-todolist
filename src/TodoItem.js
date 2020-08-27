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
    // 由于父组件的state更新了，父组件的render执行，导致子组件也要更新，但是子组件的props根本没有更新，此时更新子组件浪费性能
    // 所以要通过 shouldComponentUpdate 判断子组件是否需要更新，从而提升性能
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
        return nextProps.task !== this.props.task;
    }

    render(){
        console.log('render');
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