import {combineReducers} from 'redux';
import JogsReducers from './jogs';
import ImagesReducers from './images';
import PagesReducers from './pages';

const allReducers = combineReducers({
    jogs: JogsReducers,
    images: ImagesReducers,
    pages: PagesReducers
})

export default allReducers;