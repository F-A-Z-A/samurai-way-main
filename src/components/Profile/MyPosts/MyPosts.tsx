import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../index";

type MyPostsPropsType = {
  posts: PostsPropsType[]
}

export const MyPosts = (props: MyPostsPropsType) => {
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
        {props.posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likesCount}/>)}
      </div>
    </div>
  );
};