import {createStore} from 'redux';
import reducer from "./reducer";

const usersStore = createStore(reducer, [{name: 'a', mail: 'a', password: 'a'}]);

export default usersStore;