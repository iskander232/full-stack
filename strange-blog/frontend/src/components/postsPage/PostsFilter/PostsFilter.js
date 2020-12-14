import React, {useState} from 'react'
import styles from './PostsFilter.module.css'

function PostsFilter(props) {
    const {changeCurPosts, user, store, changeTags} = props
    const [tags, changeCurTags] = useState([])

    const submitChange = event => {
        changeTags(tags);
        changeCurPosts(store.getState().filter(post => tags.every(value =>
            post.tags.some(a => a.tag === value.tag))
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
        <div className={styles.PostsFilter}>
            <h2>Че-то отфильтровать</h2>
            <div className={styles.TagsInput}>
                <div className={styles.InputButtonTag}>
                    <input className={styles.InputTag} placeholder="новый тег" value={input}
                           onChange={changeHandler} onKeyPress={AddTag}/>
                    <button className={styles.ButtonTag} onClick={AddTagButton}>+</button>
                </div>
                <div className={styles.TagsAll}>
                    {tags.map(tag =>
                        <div className={styles.TagAndButton} key={tag.key}>
                            <div className={styles.Tag}>{tag.tag}</div>
                            <button className={styles.ButtonTag} key={tag.key} onClick={() => removeTag(tag.key)}>-
                            </button>
                        </div>)}
                </div>
            </div>
            <button placeholder="Добавить" className={styles.postAddButton} onClick={submitChange}>Поменять фильтр
            </button>
        </div>
    )
}

export default PostsFilter;