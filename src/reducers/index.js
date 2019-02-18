import {combineReducers} from 'redux';
import JogsReducers from './jogs';
import ImagesReducers from './images';
import PageReducers from './page';

const allReducers = combineReducers({
    jogs: JogsReducers,
    images: ImagesReducers,
    page: PageReducers
});

export default allReducers;