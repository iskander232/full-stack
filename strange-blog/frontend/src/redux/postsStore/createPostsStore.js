import {createStore} from 'redux';
import reducer from "./reducer";

function createPostsStore() {
    return createStore(reducer, [])

}

export default createPostsStore;