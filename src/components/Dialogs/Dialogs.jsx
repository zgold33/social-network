import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map
    (dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = state.messages.map
    (message => <Message message={message.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let textMessage = e.target.value;
        props.updateNewMessageBody(textMessage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
                <div>
                    <textarea placeholder='Enter your message'
                              onChange={onNewMessageChange}
                              value={newMessageBody}
                    />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs