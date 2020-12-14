import React, {useState} from 'react'
import Authorization from "./authorization/Authorization";
import PostsPage from "./postsPage/PostsPage";
import createPostsStore from "./redux/postsStore/CreatePostsStore";
import {connect, Provider} from "react-redux";
import updatePosts from "./redux/postsStore/updatePosts";
import {serverPath} from "../serverConf/server";

function App() {
    const [postsStore, __] = useState(createPostsStore())

    const [user, changeUser] = useState({
            // "login": 'Abacaba', "mail": 'abacaba', "password": 'abacaba', "ready": true
        }
    )

    if (!user.ready) {
        return (
            <Authorization changeUser={changeUser}/>
        );
    } else {
        updatePosts(postsStore, serverPath + "/posts/get");
        return (
            <PostsPage user={user} store={postsStore} changeUser={changeUser}/>
        )
    }
}

export default App;
