import http from "../../../helpers/http";
import ReducerStates from "../ReducerStates";

function updatePosts(store, postsPath) {
    http(postsPath, 'GET', {},
        response => {
            store.dispatch({value: response, type: ReducerStates.updatePosts})
        }, response => {})
}

export default updatePosts;