import React, {useState} from 'react'
import {Provider} from 'react-redux'
import Authorization from "./authorization/Authorization";
import createUsersStore from "../redux/usersStore/createUsersStore";
import PostsPage from "./postsPage/PostsPage";
import createPostsStore from "../redux/postsStore/createPostsStore";

function App() {
    const usersStore = createUsersStore([]);
    const postsStore = createPostsStore([]);

    const [user, changeUser] = useState({
            "name": 'Abacaba', "mail": 'abacaba', "password": 'abacaba', "ready": true
        }
    )
    if (!user.ready) {
        return (
            <Provider usersStore={usersStore}>
                <Authorization changeUser={changeUser}/>
            </Provider>
        );
    } else {
        return (
            <Provider postsStore={postsStore}>
                <PostsPage user={user} changeUser={changeUser}/>
            </Provider>
        )
    }
}

export default App;
