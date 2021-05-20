import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.dataDialogs.dialogs.map
    (dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dataDialogs.messages.map
    (message => <Message message={message.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        //props.addMessageFromApp();
        props.dispatch({ type: 'ADD-MESSAGE' });
    }

    let onMessageChange = () => {
        let textMessage = newMessageElement.current.value;
        //props.updateNewMessageTextFromApp(textMessage);
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: textMessage};
        props.dispatch(action);
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
                    <textarea onChange={onMessageChange}
                              ref={newMessageElement}
                              value={props.newMessageTextFromApp}
                    />
                </div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs