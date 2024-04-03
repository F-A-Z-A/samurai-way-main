import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               dispatch={props.dispatch}
               newPostText={props.profilePage.newPostText}/>
    </div>
  );
};