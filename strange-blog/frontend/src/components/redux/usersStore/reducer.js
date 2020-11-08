import ReducerStates from "../ReducerStates";

function reducer(state, action) {
    if (action.type === ReducerStates.addUser) {
        return [...state, action.value];
    }
    return state;
}

export default reducer;