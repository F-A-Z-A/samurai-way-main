import profileReducer, {AddPostActionType, UpdateNewPostText} from "./profileReducer";
import dialogsReducer, {AddMessageActionType, UpdateNewMessageText} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
};
export type MessagesPageType = {
  dialogs: DialogType[]
  messages: MessagesType[]
  newMessageText: string
};
export type SidebarType = {};
export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: MessagesPageType
  sidebar: SidebarType
};
export type StoreType = {
  _state: StateType
  _callSubscriber: (_state: StateType) => void
  subscribe: (callback: (_state: StateType) => void) => void
  getState: () => StateType
  dispatch: (action: ActionsTypes) => void
};
export type ActionsTypes =
  AddPostActionType
  | UpdateNewPostText
  | AddMessageActionType
  | UpdateNewMessageText;

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
    },
    sidebar: {},
  },
  _callSubscriber(_state: StateType) {
  },
  getState() {
    return this._state
  },
  subscribe(observer: (_state: StateType) => void) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
};

// @ts-ignore
window.store = store;