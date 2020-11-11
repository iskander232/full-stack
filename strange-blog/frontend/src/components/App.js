import React, {useState} from 'react'
import Authorization from "./authorization/Authorization";
import createUsersStore from "./redux/usersStore/createUsersStore";
import PostsPage from "./postsPage/PostsPage";
import createPostsStore from "./redux/postsStore/createPostsStore";

function App() {
    const [usersStore, _] = useState(createUsersStore([]));
    const [postsStore, __] = useState(createPostsStore([]));

    const [user, changeUser] = useState({
            "name": 'Abacaba', "mail": 'abacaba', "password": 'abacaba', "ready": true
        }
    )
    if (!user.ready) {
        return (
            <Authorization usersStore={usersStore} changeUser={changeUser}/>
        );
    } else {
        return (
            <PostsPage user={user} postsStore={postsStore} changeUser={changeUser}/>
        )
    }
}

export default App;
