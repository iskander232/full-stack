import React, {useState} from 'react'
import './PostsList.css'
import PostItem from "./PostItem/PostItem";

function PostsList(props) {
    const {curPosts} = props;

    return (
        <div className="PostsList">
            {curPosts.map(post => <PostItem key={post.post.timestamp} post={post.post}/>)}
        </div>
    )
}

export default PostsList