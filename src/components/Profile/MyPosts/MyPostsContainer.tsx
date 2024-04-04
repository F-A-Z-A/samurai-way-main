import React from 'react';
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
  store: StoreType
};

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
  const state = props.store.getState().profilePage;
  const addPost = () => {
    props.store.dispatch(addPostAC())
  }
  const updateNewPostText = (text: string) => {
    props.store.dispatch(updateNewPostTextAC(text))
  }
  return (
    <MyPosts addPost={addPost}
             updateNewPostText={updateNewPostText}
             posts={state.posts}
             newPostText={state.newPostText}
    />
  );
};