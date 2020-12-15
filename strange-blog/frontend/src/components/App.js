import React, {useState} from 'react'
import updatePosts from "../redux/postsStore/updatePosts";
import createPostsStore from "../redux/postsStore/createPostsStore";
import Authorization from "./authorization/Authorization";
import PostsPage from "./postsPage/PostsPage";
import {serverPath} from "../serverConf/server";

function App() {
    const [postsStore, __] = useState(createPostsStore())

    const [user, changeUser] = useState({
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
