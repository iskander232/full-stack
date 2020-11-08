import {createStore} from 'redux';
import reducer from "./reducer";

function createUsersStore() {
    return createStore(reducer, [])

}

export default createUsersStore;