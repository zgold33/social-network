const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {

        profilePage: {

            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 20},
                {id: 2, message: "Omagad", likesCount: 13},
                {id: 2, message: "YEYESSS!", likesCount: 18}
            ],

            newPostText: "PornHub.com"
        },

        dialogsPage: {

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
        },

        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageBody,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newMessageBody;
            this._callSubscriber(this._state);
        }
    }
}

// export const addPostActionCreator = () => {
//     return {
//         type: ADD_POST
//     }
// }

export const addPostActionCreator = () => ({type: ADD_POST})  // Тоже самое, что и выше

export const updateNewPostTextActionCreator = (textPost) =>
    ({type: UPDATE_NEW_POST, newPostText: textPost})

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyActionCreator = (textMessage) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: textMessage})



export default store;
window.store = store;
