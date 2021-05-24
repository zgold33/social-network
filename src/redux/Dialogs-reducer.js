const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: newMessage});
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (textMessage) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: textMessage})

export default dialogsReducer;