import React from 'react'
import styles from './PostsList.module.css'
import PostItem from "./PostItem/PostItem";

function PostsList(props) {
    const {curPosts} = props;

    return (
        <div className={styles.PostsList}>
            {curPosts.map(post => <PostItem key={post.post.timestamp} post={post.post}/>)}
        </div>
    )
}

export default PostsList