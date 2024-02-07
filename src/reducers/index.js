import { combineReducers } from 'redux'; // 2つ以上exportできないので使用する

import counterReducer from './counter';
import isLoginReducer from './isLogin';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogin: isLoginReducer
});

export default allReducers;