import React, {useState} from 'react'
import PostsAdder from "./PostsAdder/PostsAdder";
import PostsList from "./PostsList/PostsList";
import PostsFilter from "./PostsFilter/PostsFilter";
import styles from './PostsPage.module.css'
import updatePosts from "../redux/postsStore/updatePosts";
import http from "../../helpers/http";
import {serverPath} from "../../serverConf/server"
import {connect} from "react-redux";

function PostsPage(props) {
    const {user, changeUser, store} = props
    const [tags, changeTags] = useState([])

    const LogOut = () => changeUser({"login": '', "mail": '', "password": '', "ready": false})

    const [curPosts, changeCurPosts] = useState(
        store.getState().filter(post => post.tags.every(value => post.tags.some(a => a.tag === value.tag)))
    )

    store.subscribe(() => {
        const newState = store.getState().filter(post => tags.every(
            value => post.tags.some(a => a.tag === value.tag))
        )
        changeCurPosts(newState)
    })

    return (
        <div>
            <div className={styles.Head}>
                <div className={styles.Hi}>{"Привет " + user.login}</div>
                <button className={styles.LogOut} onClick={LogOut}>Выйти</button>
            </div>
            <div className={styles.PostsPage}>
                <PostsAdder user={user} store={store}/>
                <PostsList curPosts={curPosts}/>
                <PostsFilter changeCurPosts={changeCurPosts} user={user}
                             store={store} changeTags={changeTags}/>
            </div>
        </div>
    )
}

export default PostsPage;