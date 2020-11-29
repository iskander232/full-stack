import ReducerStates from "../ReducerStates";

function addUser(store, newUser) {
    store.dispatch({value: newUser, type: ReducerStates.addUser});
}

export default addUser;