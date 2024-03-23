export type DialogPropsType = {
  id: number
  name: string
};
export type MessagesPropsType = {
  id: number
  message: string
};
export type PostsPropsType = {
  id: number
  message: string
  likesCount: number
};
export type ProfilePagePropsType = {
  posts: PostsPropsType[]
  newPostText: string
}
export type MessagesPagePropsType = {
  dialogs: DialogPropsType[]
  messages: MessagesPropsType[]
  newMessageText: string
}
export type StatePropsType = {
  profilePage: ProfilePagePropsType
  dialogsPage: MessagesPagePropsType
};

export type StoreType = {
  _state: StatePropsType
  _callSubscriber: (_state: StatePropsType) => void
  subscribe: (callback: (_state: StatePropsType) => void) => void
  addPost: () => void
  updateNewPostText: (newPostText: string) => void
  addMessage: () => void
  updateNewMessageText: (newMessageText: string) => void
  getState: () => StatePropsType
}

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi! How are you?", likesCount: 12},
        {id: 2, message: "It's my name", likesCount: 11},
        {id: 3, message: "Bla-bla-bla", likesCount: 10},
        {id: 4, message: "Da-da-da", likesCount: 9},
      ],
      newPostText: ""
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
      ],
      messages: [
        {id: 1, message: "Hi-hi"},
        {id: 2, message: "Hey-hey"},
        {id: 3, message: "Yo-yo"},
        {id: 4, message: "Go-go"},
        {id: 5, message: "Wow-Wow"},
      ],
      newMessageText: ""
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber(_state: StatePropsType) {
  },
  subscribe(callback: (_state: StatePropsType) => void) {
    this._callSubscriber = callback
  },
  addPost() {
    const newPost: PostsPropsType = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state)
  },
  updateNewPostText(newPostText: string) {
    this._state.profilePage.newPostText = newPostText
    this._callSubscriber(this._state)
  },
  addMessage() {
    const newMessage: MessagesPropsType = {
      id: 6,
      message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state)
  },
  updateNewMessageText(newMessageText: string) {
    this._state.dialogsPage.newMessageText = newMessageText
    this._callSubscriber(this._state)
  },
};

declare global {
  interface Window {
    store: StoreType;
  }
}

window.store = store;


// export const state: StatePropsType = {
//   profilePage: {
//     posts: [
//       {id: 1, message: "Hi! How are you?", likesCount: 12},
//       {id: 2, message: "It's my name", likesCount: 11},
//       {id: 3, message: "Bla-bla-bla", likesCount: 10},
//       {id: 4, message: "Da-da-da", likesCount: 9},
//     ],
//     newPostText: ""
//   },
//   dialogsPage: {
//     dialogs: [
//       {id: 1, name: "Dimych"},
//       {id: 2, name: "Andrey"},
//       {id: 3, name: "Sveta"},
//       {id: 4, name: "Sasha"},
//       {id: 5, name: "Viktor"},
//       {id: 6, name: "Valera"},
//     ],
//     messages: [
//       {id: 1, message: "Hi-hi"},
//       {id: 2, message: "Hey-hey"},
//       {id: 3, message: "Yo-yo"},
//       {id: 4, message: "Go-go"},
//       {id: 5, message: "Wow-Wow"},
//     ],
//     newMessageText: ""
//   }
// };
//
// let onChange = (state: StatePropsType) => {
// }
//
// export const subscribe = (callback: (state: StatePropsType) => void) => {
//   onChange = callback
// }
//
// export type DialogPropsType = {
//   id: number
//   name: string
// };
// export type MessagesPropsType = {
//   id: number
//   message: string
// };
// export type PostsPropsType = {
//   id: number
//   message: string
//   likesCount: number
// };
// export type ProfilePagePropsType = {
//   posts: PostsPropsType[]
//   newPostText: string
// }
// export type MessagesPagePropsType = {
//   dialogs: DialogPropsType[]
//   messages: MessagesPropsType[]
//   newMessageText: string
// }
// export type StatePropsType = {
//   profilePage: ProfilePagePropsType
//   dialogsPage: MessagesPagePropsType
// };
//
// export const addPost = () => {
//   const newPost: PostsPropsType = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCount: 0
//   };
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = "";
//   onChange(state)
// }
//
// export const updateNewPostText = (newPostText: string) => {
//   state.profilePage.newPostText = newPostText
//   onChange(state)
// }
//
// export const addMessage = () => {
//   const newMessage: MessagesPropsType = {
//     id: 6,
//     message: state.dialogsPage.newMessageText
//   };
//   state.dialogsPage.messages.push(newMessage);
//   state.dialogsPage.newMessageText = "";
//   onChange(state)
// }
//
// export const updateNewMessageText = (newMessageText: string) => {
//   state.dialogsPage.newMessageText = newMessageText
//   onChange(state)
// }