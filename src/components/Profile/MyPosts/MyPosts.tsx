import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostsType} from "../../../redux/state";

type MyPostsPropsType = {
  posts: PostsType[]
  dispatch: (action: ActionsTypes) => void
  newPostText: string
};

export const MyPosts = (props: MyPostsPropsType) => {
  const postElement = props.posts.map(
    post => <Post id={post.id} message={post.message} likeCount={post.likesCount}/>
  )
  
  const addPost = () => {
    props.dispatch({type: "ADD_POST"})
  }
  
  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch({type: "UPDATE_NEW_POST_TEXT", newPostText: e.currentTarget.value})
  }
  
  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea value={props.newPostText}
                    onChange={onPostChange}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};