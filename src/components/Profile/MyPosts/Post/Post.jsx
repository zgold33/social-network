import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {

    return <div>
        <div className={'posts'}>
            <div className={classes.item}>
                <img src='https://www.kinonews.ru/insimgs/poster/poster9623_1.jpg'/>
                {props.message}
                <button>Like</button>
            </div>
            <button>{props.likesCount}</button>
        </div>
    </div>
}

export default Post;