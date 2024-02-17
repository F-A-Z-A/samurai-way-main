import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/477388/c8c2b9c4-24d9-494d-8859-22d4ab201049/s1200?webp=false"
             alt="image is not defined"/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
  );
};