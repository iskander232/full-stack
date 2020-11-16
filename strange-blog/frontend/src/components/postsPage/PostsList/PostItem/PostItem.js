import React from 'react'
import styles from './PostItem.module.css'

function PostItem(props) {
    const {post} = props;

    return (
        <div className={styles.PostItem}>
            <div className={styles.TitleItem}>{post.postname}</div>
            <div className={styles.ContentItem}>{post.postcontent}</div>
            <div className={styles.TagsAndDate}>
                <div className={styles.TagsItem}>
                    {post.tags.map(tag => <div className={styles.TagInItem} key={tag.key}>{tag.tag}</div>)}
                </div>
                <div className={styles.DateItem}>{post.date}</div>
            </div>
        </div>
    )
}

export default PostItem;