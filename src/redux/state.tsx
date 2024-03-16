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
}
export type MessagesPagePropsType = {
  messages: MessagesPropsType[]
  dialogs: DialogPropsType[]
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
      {id: 3, message: "Blabla", likesCount: 10},
      {id: 4, message: "Dadada", likesCount: 9},
    ],
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
  }
};

export const addPost = (postMessage: string) => {
  const newPost = {id: 5, message: postMessage, likesCount: 0};
  state.profilePage.posts.push(newPost);
}