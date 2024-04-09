import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsPropsType) => {
  
  const postElement = props.profilePage.posts.map(
    p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likesCount}/>
  )
  
  const onAddPost = () => {
    props.addPost();
  }
  
  const onNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value)
  }
  
  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea value={props.profilePage.newPostText}
                    onChange={onNewPostText}
                    placeholder={"Enter your post"}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};