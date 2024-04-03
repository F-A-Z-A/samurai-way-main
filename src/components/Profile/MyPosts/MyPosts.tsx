import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostsType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

type MyPostsPropsType = {
  posts: PostsType[]
  dispatch: (action: ActionsTypes) => void
  newPostText: string
};

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  
  const postElement = props.posts.map(
    post => <Post id={post.id} message={post.message} likeCount={post.likesCount}/>
  )
  
  const addPost = () => {
    props.dispatch(addPostAC())
  }
  
  const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewPostTextAC(e.currentTarget.value))
  }
  
  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea value={props.newPostText}
                    onChange={updateNewPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};