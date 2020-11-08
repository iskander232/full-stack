import React, {useState} from 'react'
import Authorization from "./authorization/Authorization";
import createUsersStore from "./redux/usersStore/createUsersStore";
import PostsPage from "./postsPage/PostsPage";

function App() {
    const usersStore = createUsersStore([]);
    const [user, changeUser] = useState({"name": '', "mail": '', "password": '', "ready": false})
    if (!user.ready) {
        return (
            <Authorization usersStore={usersStore} changeUser={changeUser}/>
        );
    } else {
        return (
            <PostsPage user={user.name}/>
        )
    }
}

export default App;
