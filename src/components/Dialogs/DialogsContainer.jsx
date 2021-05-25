import React from 'react';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (textMessage) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(textMessage));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}/>

}

export default DialogsContainer;