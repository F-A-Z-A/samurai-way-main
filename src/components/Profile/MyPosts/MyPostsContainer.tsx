import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../store-context";

export const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const state = store.getState().profilePage;
        const addPost = () => store.dispatch(addPostAC());
        const updateNewPostText = (text: string) => store.dispatch(updateNewPostTextAC(text));
        return (
          <MyPosts addPost={addPost}
                   updateNewPostText={updateNewPostText}
                   posts={state.posts}
                   newPostText={state.newPostText}
          />
        )
      }}
    </StoreContext.Consumer>
  );
};