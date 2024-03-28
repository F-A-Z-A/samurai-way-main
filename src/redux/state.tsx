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

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostText = ReturnType<typeof updateNewPostTextAC>
export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateNewMessageText = ReturnType<typeof updateNewMassageTextAC>

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
        this._state.profilePage.posts.push({
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        });
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;
      case "UPDATE_NEW_POST_TEXT":
        this._state.profilePage.newPostText = action.newPostText;
        this._callSubscriber(this._state);
        break;
      case "ADD_MESSAGE":
        this._state.dialogsPage.messages.push({
          id: 6,
          message: this._state.dialogsPage.newMessageText
        });
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

export const addPostAC = () => {
  return {
    type: "ADD_POST"
  } as const
}
export const updateNewPostTextAC = (newPostText: string) => {
  return {
    type: "UPDATE_NEW_POST_TEXT",
    newPostText: newPostText
  } as const
}
export const addMessageAC = () => {
  return {
    type: "ADD_MESSAGE"
  } as const
}
export const updateNewMassageTextAC = (newMessageText: string) => {
  return {
    type: "UPDATE_NEW_MESSAGE_TEXT",
    newMessageText: newMessageText
  } as const
}

declare global {
  interface Window {
    store: StoreType;
  }
}
window.store = store;