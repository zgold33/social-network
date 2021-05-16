import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {updateNewMessageText} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}

                    <Route path='/dialogs'
                           render={ () => <Dialogs dataDialogs={props.appState.dialogsPage}
                                                   updateNewMessageTextFromApp={props.appUpdateNewMessageText}
                                                   newMessageTextFromApp={props.appState.dialogsPage.newMessageText}
                                                   addMessageFromApp={props.appAddMessage}/>}/>
                    <Route path='/profile'
                           render={ () => <Profile dataProfile={props.appState.profilePage}
                                                   newPostTextFromApp={props.appState.profilePage.newPostText}
                                                   updateNewPostTextFromApp={props.appUpdateNewPostText}
                                                   addPostFromApp={props.appAddPost}/>}/>
                    <Route path='/news'
                           render={ () => <News /> }/>
                    <Route path='/music'
                           render={ () => <Music /> }/>
                    <Route path='/settings'
                           render={ () => <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
