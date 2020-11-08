import ReducerStates from "../ReducerStates";

function reducer(state, action) {
    if (action.type === ReducerStates.addPost) {
        return [...state, action.value];
    }
    return state;
}

export default reducer;