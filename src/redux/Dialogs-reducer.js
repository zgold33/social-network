const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {

    dialogs: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Miha'},
        {id: 4, name: 'Valya'},
        {id: 5, name: 'Vladlen'},
        {id: 6, name: 'Petya'}
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],

    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

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