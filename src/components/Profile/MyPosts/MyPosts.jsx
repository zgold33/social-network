import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map( posts =>  <Post message={posts.message} likesCount={posts.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
       let textPost = newPostElement.current.value;
       props.addPostFromProfile(textPost);
       props.updateNewPostTextFromProfile('');
    }

    let onPostChange = () => {
        let textPost = newPostElement.current.value;
        props.updateNewPostTextFromProfile(textPost);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostTextFromProfile}
                    />
                </div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;