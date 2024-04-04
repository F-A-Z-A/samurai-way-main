import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/store";

type MyPostsPropsType = ProfilePageType & {
  // posts: PostsType[]
  // newPostText: string
  addPost: () => void
  updateNewPostText: (text: string) => void
};

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  
  const postElement = props.posts.map(
    post => <Post id={post.id} message={post.message} likeCount={post.likesCount}/>
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
          <textarea value={props.newPostText}
                    onChange={onNewPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};