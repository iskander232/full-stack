import React, {useState} from 'react'
import Authorization from "./authorization/Authorization";
import PostsPage from "./postsPage/PostsPage";
import createPostsStore from "./redux/postsStore/createPostsStore";

function App() {
    const [postsStore, __] = useState(createPostsStore([]));

    const [user, changeUser] = useState({
            "login": 'Abacaba', "mail": 'abacaba', "password": 'abacaba', "ready": true
        }
    )
    if (!user.ready) {
        return (
            <Authorization changeUser={changeUser}/>
        );
    } else {
        return (
            <PostsPage user={user} postsStore={postsStore} changeUser={changeUser}/>
        )
    }
}

export default App;
