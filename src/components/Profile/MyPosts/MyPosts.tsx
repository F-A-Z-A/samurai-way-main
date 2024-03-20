import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../redux/state";

type MyPostsPropsType = {
  posts: PostsPropsType[]
  addPost: () => void
  newPostText: string
  updateNewPostText: (newPostText: string) => void
};

export const MyPosts = (props: MyPostsPropsType) => {
  const postElement = props.posts.map(
    post => <Post id={post.id} message={post.message} likeCount={post.likesCount}/>
  )
  
  // const newPostElement = useRef<HTMLTextAreaElement>(null);
  const addPost = () => {
    props.addPost()
    // props.updateNewPostText("")
  }
  
  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value)
    // if (newPostElement.current) {
    //   props.updateNewPostText(newPostElement.current.value)
    // }
  }
  
  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          {/*<textarea ref={newPostElement}*/}
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