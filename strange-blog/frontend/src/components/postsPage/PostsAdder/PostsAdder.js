import React, {useState} from 'react'
import './PostsAdder.css'
import TagsInput from "./TagsInput/TagsInput";
import addPost from "../../redux/postsStore/addPost";

function PostsAdder(props) {
    const {user, postsStore} = props;
    const today = new Date();

    const [newPost, updateNewPost] = useState({
        "postname": '',
        "postcontent": '',
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
        if (newPost.postname.length < 3) {
            changeErrorMessage('Слишком короткое название');
            return;
        }
        if (newPost.postcontent.length < 3) {
            changeErrorMessage('Слишком мало текста');
            return;
        }
        addPost(postsStore, {"user": user, "post": newPost});

        updateNewPost({
            "postname": '',
            "postcontent": '',
            "tags": [],
            "date": today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            "timestamp": Date.now()
        })
    }

    return (
        <div className="PostsAdder">
            <input name="postname" value={newPost.postname} placeholder="Название поста"
                   onChange={changeHandler} className="postnameInput"/>
            <textarea name="postcontent" value={newPost.postcontent} placeholder="Пост"
                      onChange={changeHandler} className="postcontentInput"/>
            <TagsInput newPost={newPost} updateNewPost={updateNewPost}/>
            <button placeholder="Добавить" className="postAddButton" onClick={submitChange}>
                Добавить пост
            </button>
            <h6>{errorMessage}</h6>
        </div>
    )
}

export default PostsAdder;