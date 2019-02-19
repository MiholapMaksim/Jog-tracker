import {combineReducers} from 'redux';
import JogsReducers from './jogs';
import ImagesReducers from './images';
import PageReducers from './page';
import FilterReducers from './filter';


const allReducers = combineReducers({
    jogs: JogsReducers,
    images: ImagesReducers,
    page: PageReducers,
    filter: FilterReducers
});

export default allReducers;