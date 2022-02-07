import {createStore,combineReducers} from 'redux';
import clubReducer from './reducer/club';
import jouerReducer from './reducer/jouer';


const allReducers = combineReducers({
    clubReducer: clubReducer,
    jouerReducer: jouerReducer
})
export default createStore(allReducers)