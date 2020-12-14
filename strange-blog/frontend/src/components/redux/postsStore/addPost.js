import ReducerStates from "../ReducerStates";
import {serverPath} from "../../../serverConf/server";
import http from "../../../helpers/http";

function addPost(store, newPost) {
    http(serverPath + "/posts/add", 'POST', newPost,
        response => store.dispatch({value: newPost, type: ReducerStates.addPost},response => {})
    )
}

export default addPost;