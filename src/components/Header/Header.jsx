import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return  <header className={classes.header}>
        <img src='https://download.blender.org/branding/community/blender_community_badge_orange.png'/>
    </header>
}

export default Header;