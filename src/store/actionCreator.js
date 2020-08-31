import {DEL_TODO_ITEM, ADD_TODO_ITEM, CHANGE_INPUT_VALUE, INIT_LIST} from './actionTypes';
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});
export const getDelItemAction = (index) => ({
    type: DEL_TODO_ITEM,
    index
});
export const getInitListAction = (value) => ({
    type: INIT_LIST,
    value
});