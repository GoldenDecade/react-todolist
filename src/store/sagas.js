import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import {getInitListAction} from './actionCreator';
import axios from 'axios';

function* initListAction() {
    try {
        const res = yield axios.get('/list.json');
        const action = getInitListAction(res.data);
        yield put(action);
    }catch(e){
        console.log('list.json 请求失败');
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, initListAction);
}
export default mySaga;