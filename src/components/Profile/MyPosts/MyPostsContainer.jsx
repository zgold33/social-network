import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    debugger;

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (textPost) => {
        let action = updateNewPostTextActionCreator(textPost);
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;