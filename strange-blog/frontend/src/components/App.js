import React, {useState} from 'react'
import updatePosts from "../redux/postsStore/updatePosts";
import createPostsStore from "../redux/postsStore/createPostsStore";
import Authorization from "./authorization/Authorization";
import PostsPage from "./postsPage/PostsPage";
import {serverPath} from "../serverConf/server";
import getCookie from "../helpers/getCookie";
import setCookie from "../helpers/setCookie";

function App() {
    const [postsStore, __] = useState(createPostsStore())

    const [user, changeUser] = useState({
        "login": '',
        "mail": '',
        "password": '',
        "repeatPassword": '',
        "ready": false
    })

    if (!user.ready && (getCookie("login") == null || getCookie("login").length < 5)) {
        return (
            <Authorization changeUser={changeUser}/>
        );
    } else {
        if (user.login === "") {
            changeUser({"login": getCookie("login"), "ready": true})
        }

        setCookie("login", user.login)
        updatePosts(postsStore, serverPath + "/posts/get");
        return (
            <PostsPage user={user} store={postsStore} changeUser={changeUser}/>
        )
    }
}

export default App;
