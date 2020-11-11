import React from 'react'
import './PostItem.css'

function PostItem(props) {
    const {post} = props;

    return (
        <div className="PostItem">
            <div className="TitleItem">{post.postname}</div>
            <div className="ContentItem">{post.postcontent}</div>
            <div className="TagsAndDate">
                <div className="TagsItem">
                    {post.tags.map(tag => <div className="TagInItem" key={tag.key}>{tag.tag}</div>)}
                </div>
                <div className="DateItem">{post.date}</div>
            </div>
        </div>
    )
}

export default PostItem;