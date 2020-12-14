import React, {useState} from 'react'
import styles from './PostsAdder.module.css'
import TagsInput from "./TagsInput/TagsInput";
import addPost from "../../redux/postsStore/addPost";
import http from "../../../helpers/http";
import {serverPath} from "../../../serverConf/server";
import ReducerStates from "../../redux/ReducerStates";

function PostsAdder(props) {
    const {user, postsStore, store} = props;
    const today = new Date();

    const [newPost, updateNewPost] = useState({
        "login": user.login,
        "postTitle": '',
        "postContent": '',
        "tags": [],
        "date": today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
        "timestamp": Date.now()
    })
    const [errorMessage, changeErrorMessage] = useState('')

    const changeHandler = event => {
        let changedPost = {
            ...newPost
        }
        changedPost[event.target.name] = event.target.value;
        updateNewPost(changedPost);
    }

    const submitChange = event => {
        if (newPost.postTitle.length < 3) {
            changeErrorMessage('Слишком короткое название');
            return;
        }
        if (newPost.postContent.length < 3) {
            changeErrorMessage('Слишком мало текста');
            return;
        }

        newPost.tags = JSON.stringify(newPost.tags)
        addPost(store, newPost)

        updateNewPost({
            "postTitle": '',
            "postContent": '',
            "tags": [],
            "date": today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            "timestamp": Date.now()
        })
    }

    return (
        <div className={styles.PostsAdder}>
            <input name="postTitle" value={newPost.postTitle} placeholder="Название поста"
                   onChange={changeHandler} className={styles.postnameInput}/>
            <textarea name="postContent" value={newPost.postContent} placeholder="Пост"
                      onChange={changeHandler} className={styles.postcontentInput}/>
            <TagsInput newPost={newPost} updateNewPost={updateNewPost}/>
            <button placeholder="Добавить" className={styles.postAddButton} onClick={submitChange}>
                Добавить пост
            </button>
            <h6>{errorMessage}</h6>
        </div>
    )
}

export default PostsAdder;