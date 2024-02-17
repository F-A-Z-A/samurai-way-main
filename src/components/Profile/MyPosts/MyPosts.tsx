import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        New post
      </div>
      <div className={s.posts}>
        <Post message="Hi! How are you?" likeCount={11}/>
        <Post message="It's my name" likeCount={22}/>
      </div>
    </div>
  );
};