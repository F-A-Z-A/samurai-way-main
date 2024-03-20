import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../redux/state";

type ProfilePropsType = {
  profilePage: ProfilePagePropsType
  addPost: () => void
  updateNewPostText: (newPostText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               addPost={props.addPost}
               newPostText={props.profilePage.newPostText}
               updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};