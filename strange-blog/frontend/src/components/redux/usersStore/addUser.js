import usersStore from "./usersStore";

function addUser(newUser) {
    usersStore.dispatch({value: newUser});
}

export default addUser;