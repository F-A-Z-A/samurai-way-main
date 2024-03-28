export type DialogType = {
  id: number
  name: string
};
export type MessagesType = {
  id: number
  message: string
};
export type PostsType = {
  id: number
  message: string
  likesCount: number
};
export type ProfilePageType = {
  posts: PostsType[]
  newPostText: string
}
export type MessagesPageType = {
  dialogs: DialogType[]
  messages: MessagesType[]
  newMessageText: string
}
export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: MessagesPageType
};
export type StoreType = {
  _state: StateType
  _callSubscriber: (_state: StateType) => void
  subscribe: (callback: (_state: StateType) => void) => void
  getState: () => StateType
  dispatch: (action: ActionsTypes) => void
}

// export type AddPostActionType = ReturnType<typeof addPostAC>
export type AddPostActionType = {
  type: "ADD_POST"
}

// export type UpdateNewPostText = ReturnType<typeof updateNewPostTextAC>
export type UpdateNewPostText = {
  type: "UPDATE_NEW_POST_TEXT"
  newPostText: string
}

// export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type AddMessageActionType = {
  type: "ADD_MESSAGE"
}

// export type UpdateNewMessageText = ReturnType<typeof updateNewMassageTextAC>
export type UpdateNewMessageText = {
  type: "UPDATE_NEW_MESSAGE_TEXT"
  newMessageText: string
}

export type ActionsTypes =
  AddPostActionType
  | UpdateNewPostText
  | AddMessageActionType
  | UpdateNewMessageText

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
  _callSubscriber(_state: StateType) {
  },
  getState() {
    return this._state
  },
  subscribe(callback: (_state: StateType) => void) {
    this._callSubscriber = callback
  },
  dispatch(action) {
    switch (action.type) {
      case "ADD_POST":
        const newPost: PostsType = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;
      case "UPDATE_NEW_POST_TEXT":
        this._state.profilePage.newPostText = action.newPostText;
        this._callSubscriber(this._state);
        break;
      case "ADD_MESSAGE":
        const newMessage: MessagesType = {
          id: 6,
          message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
        break;
      case "UPDATE_NEW_MESSAGE_TEXT":
        this._state.dialogsPage.newMessageText = action.newMessageText;
        this._callSubscriber(this._state);
        break;
    }
  }
};

const ADD_POST = "ADD_POST";
export const addPostAC = (): AddPostActionType => {
  return {
    type: ADD_POST
  }
}

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const updateNewPostTextAC = (newPostText: string): UpdateNewPostText => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: newPostText
  }
}

const ADD_MESSAGE = "ADD_MESSAGE";
export const addMessageAC = (): AddMessageActionType => {
  return {
    type: ADD_MESSAGE
  }
}

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
export const updateNewMassageTextAC = (newMessageText: string): UpdateNewMessageText => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText
  }
}

declare global {
  interface Window {
    store: StoreType;
  }
}
window.store = store;


// if (action.type === "ADD_POST") {
//   const newPost: PostsType = {
//     id: 5,
//     message: this._state.profilePage.newPostText,
//     likesCount: 0
//   };
//   this._state.profilePage.posts.push(newPost);
//   this._state.profilePage.newPostText = "";
//   this._callSubscriber(this._state)
// } else if (action.type === "UPDATE_NEW_POST_TEXT") {
//   this._state.profilePage.newPostText = action.newPostText
//   this._callSubscriber(this._state)
// } else if (action.type === "ADD_MESSAGE") {
//   const newMessage: MessagesType = {
//     id: 6,
//     message: this._state.dialogsPage.newMessageText
//   };
//   this._state.dialogsPage.messages.push(newMessage);
//   this._state.dialogsPage.newMessageText = "";
//   this._callSubscriber(this._state)
// } else if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
//   this._state.dialogsPage.newMessageText = action.newMessageText
//   this._callSubscriber(this._state)
// }


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