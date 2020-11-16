import React, {useState} from 'react'
import styles from './TagsInput.module.css'

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
        <div className={styles.TagsInput}>
            <div className={styles.InputButtonTag}>
                <input className={styles.InputTag} placeholder="новый тег" value={input}
                       onChange={changeHandler} onKeyPress={AddTag}/>
                <button className={styles.ButtonTag} onClick={AddTagButton}>+</button>
            </div>
            <div className={styles.TagsAll}>
                {newPost.tags.map(tag =>
                    <div className={styles.TagAndButton} key={tag.key}>
                        <div className={styles.Tag}>{tag.tag}</div>
                        <button className={styles.ButtonTag} key={tag.key} onClick={() => removeTag(tag.key)}>-</button>
                    </div>)}
            </div>
        </div>
    )
}

export default TagsInput;