import { combineReducers  } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import ScreenView from './ScreenView';

const rootReducer = combineReducers({
    routing,
    ScreenView
});

export default rootReducer;