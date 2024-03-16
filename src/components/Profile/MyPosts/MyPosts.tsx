import React, {ChangeEvent, useRef, useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../redux/state";

type MyPostsPropsType = {
  posts: PostsPropsType[]
  addPost: (postMessage: string) => void
};

export const MyPosts = (props: MyPostsPropsType) => {
  const postElement = props.posts.map(
    post => <Post id={post.id} message={post.message} likeCount={post.likesCount}/>
  )
  
  const newPostElement = useRef<HTMLTextAreaElement>(null);
  const addPost = () => {
    const text: string | undefined = newPostElement.current?.value;
    if (text) {
      props.addPost(text)
    }
  }
  
  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};