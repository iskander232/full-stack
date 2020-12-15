import ReducerStates from "../ReducerStates";

function reducer(state, action) {
    if (action.type === ReducerStates.addPost) {
        action.value.tags = JSON.parse(action.value.tags);
        return [action.value, ...state];
    }
    if (action.type === ReducerStates.updatePosts) {
        return action.value;
    }
    return state;
}

export default reducer;