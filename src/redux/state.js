let rerenderEntireTree = () => {
    console.log('state changed')
}

let state = {

    profilePage: {

        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: "It's my first post", likesCount: 20},
            {id: 2, message: "Omagad", likesCount: 13},
            {id: 2, message: "YEYESSS!", likesCount: 18}
        ],

        newPostText: 'PornHub.com'
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

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export const updateNewPostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}

export const addMessage = (dialogMessage) => {
    let newMessage = {
        id: 6,
        message: dialogMessage
    }
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessageText) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state