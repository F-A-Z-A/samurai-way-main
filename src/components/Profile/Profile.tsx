import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsPropsType} from "../../index";

type ProfilePropsType = {
  posts: PostsPropsType[]
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts}/>
    </div>
  );
};