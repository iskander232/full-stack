import React, {useState} from 'react'
import './TagsInput.css'

function TagsInput(props) {
    const {newPost, updateNewPost} = props;


    const [input, changeInput] = useState('')

    const changeHandler = event => {
        changeInput(event.target.value);
    }

    const AddTag = event => {
        if ((event.key === 'Enter' || event.click) && input.length > 0) {

            let changedPost = {...newPost};
            changedPost.tags = [{"key": Date.now(), "tag": input}].concat(newPost.tags);
            updateNewPost(changedPost);
            changeInput('');
        }
    }

    const AddTagButton = event => {
        event.key = "Enter";
        AddTag(event);
    }

    const removeTag = key => {
        let changedPost = {...newPost};

        changedPost.tags = changedPost.tags.filter(x => x.key !== key)
        updateNewPost(changedPost)
    }

    return (
        <div className="TagsInput">
            <div className="InputButtonTag">
                <input className="InputTag" placeholder="новый тег" value={input}
                       onChange={changeHandler} onKeyPress={AddTag}/>
                <button className="ButtonTag" onClick={AddTagButton}>+</button>
            </div>
            <div className="TagsAll">
                {newPost.tags.map(tag =>
                    <div className="TagAndButton" key={tag.key}>
                        <div className="Tag">{tag.tag}</div>
                        <button className="ButtonTag" key={tag.key} onClick={() => removeTag(tag.key)}>-</button>
                    </div>)}
            </div>
        </div>
    )
}

export default TagsInput;