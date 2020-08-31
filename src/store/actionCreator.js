import {DEL_TODO_ITEM, ADD_TODO_ITEM, CHANGE_INPUT_VALUE, INIT_LIST} from './actionTypes';
import axios from 'axios';

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
// 使用redux-thunk 后,action返回的 不仅仅只是一个对象了
export const getTodoList = () => {
  return (dispatch) => {
      axios.get('/list.json').then(res => {
          dispatch(getInitListAction(res.data));
      })
  }
};
