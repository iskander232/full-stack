import ReducerStates from "../ReducerStates";

function reducer(state, action) {
    if (action.type === ReducerStates.addPost) {
        return [action.value, ...state];
    }
    return state;
}

export default reducer;