import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi! How are you?" likeCount={11}/>
        <Post message="It's my name" likeCount={22}/>
      </div>
    </div>
  );
};