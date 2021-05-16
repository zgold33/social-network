import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, addMessage, updateNewPostText, updateNewMessageText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state) => {
ReactDOM.render(
    <BrowserRouter>
    <App appState={state}
         appAddPost={addPost}
         appUpdateNewPostText={updateNewPostText}
         appAddMessage={addMessage}
         appUpdateNewMessageText={updateNewMessageText}/>
    </BrowserRouter>,
  document.getElementById('root')
);
}
