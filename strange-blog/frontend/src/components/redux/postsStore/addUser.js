import ReducerStates from "../ReducerStates";

function addPost(store, newPost) {
    store.dispatch({value: newPost, type: ReducerStates.addPost});
}

export default addPost;