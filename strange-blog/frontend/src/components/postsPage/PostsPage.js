import React, {useState} from 'react'
import PostsAdder from "./PostsAdder/PostsAdder";
import PostsList from "./PostsList/PostsList";
import PostsFilter from "./PostsFilter/PostsFilter";
import './PostsPage.css'

function PostsPage(props) {
    const {user, postsStore, changeUser} = props
    const [tags, changeTags] = useState([])
    const [times, changeTimes] = useState({"min": 0, "max": 3005111830404})
    const LogOut = () => changeUser({
            "name": '', "mail": '', "password": '', "ready": false
        }
    )

    const [curPosts, changeCurPosts] = useState(
        postsStore.getState().filter(post => post.post.timestamp <= times.max &&
            post.post.timestamp >= times.min &&
            tags.every(value => post.post.tags.some(a => a.tag === value.tag)) && user.name === post.user.name
        )
    )


    postsStore.subscribe(() => {
        const newState = postsStore.getState().filter(post => post.post.timestamp <= times.max &&
            post.post.timestamp >= times.min &&
            tags.every(value => post.post.tags.some(a => a.tag === value.tag)) && user.name === post.user.name
        )
        changeCurPosts(newState)
    })
    return (
        <div>
            <div className="Head">
                <div className="Hi">{"Привет " + user.name}</div>
                <button className="LogOut" onClick={LogOut}>Выйти</button>
            </div>
            <div className="PostsPage">
                <PostsAdder user={user} postsStore={postsStore}/>
                <PostsList curPosts={curPosts}/>
                <PostsFilter changeCurPosts={changeCurPosts} user={user}
                             postsStore={postsStore} changeTags={changeTags} times={times} changeTimes={changeTimes}/>
            </div>
        </div>
    )
}

export default PostsPage;