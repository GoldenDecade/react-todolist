import {DEL_TODO_ITEM, ADD_TODO_ITEM, CHANGE_INPUT_VALUE, INIT_LIST} from './actionTypes';

const defaultState = {
    inputValue: '',
    list: []
};
// reducer是纯函数 给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DEL_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = newState.list.concat(action.value);
        return newState;
    }
    return state;
};