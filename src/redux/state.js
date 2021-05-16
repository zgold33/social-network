import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {

        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 20},
            {id: 2, message: "Omagad", likesCount: 13},
            {id: 2, message: "YEYESSS!", likesCount: 18}
        ],

        newPostText: 'it-kamasutra.com'
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

        newMessageText: 'Yo, How are you?'
    },

    sidebar: {}
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}

export let addMessage = (dialogMessage) => {
    let newMessage = {
        id: 6,
        message: dialogMessage
    }
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newMessageText) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireTree(state);
}

export default state