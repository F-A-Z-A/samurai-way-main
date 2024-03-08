import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type DialogPropsType = {
  id: number
  name: string
}
const dialogs = [
  {id: 1, name: "Dimych"},
  {id: 2, name: "Andrey"},
  {id: 3, name: "Sveta"},
  {id: 4, name: "Sasha"},
  {id: 5, name: "Viktor"},
  {id: 6, name: "Valera"},
];

export type MessagesPropsType = {
  id: number
  message: string
}
const messages = [
  {id: 1, message: "Hi-hi"},
  {id: 2, message: "Hey-hey"},
  {id: 3, message: "Yo-yo"},
  {id: 4, message: "Go-go"},
  {id: 5, message: "Wow-Wow"},
];

export type PostsPropsType = {
  id: number
  message: string
  likesCount: number
}
const posts = [
  {id: 1, message: "Hi! How are you?", likesCount: 12},
  {id: 2, message: "It's my name", likesCount: 11},
];

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts}/>, document.getElementById('root'));