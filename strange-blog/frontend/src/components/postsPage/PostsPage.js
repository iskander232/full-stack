import React from 'react'

function PostsPage(props) {
    const {user} = props
    return (
        <h1>{user}</h1>
    )
}

export default PostsPage;