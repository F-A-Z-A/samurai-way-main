import {rerenderEntireTree} from "../render";
import {v1} from "uuid";

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

export const state: StatePropsType = {
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
};

export const addPost = () => {
  const newPost: PostsPropsType = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state)
}

export const updateNewPostText = (newPostText: string) => {
  state.profilePage.newPostText = newPostText
  rerenderEntireTree(state)
}

export const addMessage = () => {
  const newMessage: MessagesPropsType = {
    id: 6,
    message: state.dialogsPage.newMessageText
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state)
}

export const updateNewMessageText = (newMessageText: string) => {
  state.dialogsPage.newMessageText = newMessageText
  rerenderEntireTree(state)
}

