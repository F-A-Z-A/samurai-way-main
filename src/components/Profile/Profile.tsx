import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsPropsType, ProfilePagePropsType} from "../../redux/state";

type ProfilePropsType = {
  state: ProfilePagePropsType
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}/>
    </div>
  );
};