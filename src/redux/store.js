import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";

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
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
