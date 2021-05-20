import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.dataProfile.posts}
                     newPostTextFromProfile={props.newPostTextFromApp}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;
