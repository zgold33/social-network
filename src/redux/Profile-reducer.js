const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20},
        {id: 2, message: "Omagad", likesCount: 13},
        {id: 2, message: "YEYESSS!", likesCount: 18}
    ],
    newPostText: "PornHub.com"
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: state.newPostText, likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
        }
    }


// export const addPostActionCreator = () => {
//     return {
//         type: ADD_POST
//     }
// }

export const addPostActionCreator = () => ({type: ADD_POST})  // Тоже самое, что и выше

export const updateNewPostTextActionCreator = (textPost) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: textPost})

    export default profileReducer;