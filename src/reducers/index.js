import {combineReducers} from 'redux';
import JogsReducers from './jogs';
import ImagesReducers from './images';

const allReducers = combineReducers({
    jogs: JogsReducers,
    images: ImagesReducers
})

export default allReducers;