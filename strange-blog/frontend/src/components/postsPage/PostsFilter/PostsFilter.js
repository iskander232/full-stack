import React, {useState} from 'react'
import './PostsFilter.css'

function PostsFilter(props) {
    const {changeCurPosts, user, postsStore, changeTags, times, changeTimes} = props
    const [tags, changeCurTags] = useState([])

    const submitChange = event => {
        changeTags(tags);
        changeCurPosts(postsStore.getState().filter(post => post.post.timestamp <= times.max &&
            post.post.timestamp >= times.min &&
            tags.every(value => post.post.tags.some(a => a.tag === value.tag)) && user.name === post.user.name
        ))
    }
    const [input, changeInput] = useState('')

    const changeHandler = event => {
        changeInput(event.target.value);
    }

    const AddTag = event => {
        if ((event.key === 'Enter' || event.click) && input.length > 0) {
            changeCurTags([{"key": Date.now(), "tag": input}, ...tags])
            changeInput('');
        }
    }

    const AddTagButton = event => {
        event.key = "Enter";
        AddTag(event);
    }

    const removeTag = key => {
        changeCurTags(tags.filter(x => x.key !== key));
    }

    return (
        <div className="PostsFilter">
            <h2>Че-то отфильтровать</h2>
            <div className="TagsInput">
                <div className="InputButtonTag">
                    <input className="InputTag" placeholder="новый тег" value={input}
                           onChange={changeHandler} onKeyPress={AddTag}/>
                    <button className="ButtonTag" onClick={AddTagButton}>+</button>
                </div>
                <div className="TagsAll">
                    {tags.map(tag =>
                        <div className="TagAndButton" key={tag.key}>
                            <div className="Tag">{tag.tag}</div>
                            <button className="ButtonTag" key={tag.key} onClick={() => removeTag(tag.key)}>-</button>
                        </div>)}
                </div>
            </div>
            <button placeholder="Добавить" className="postAddButton" onClick={submitChange}>Поменять фильтр</button>
        </div>
    )
}

export default PostsFilter;