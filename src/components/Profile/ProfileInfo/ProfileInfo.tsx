import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoType = {
  profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoType) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img
          // src="https://avatars.mds.yandex.net/get-pdb/477388/c8c2b9c4-24d9-494d-8859-22d4ab201049/s1200?webp=false"
          alt="image is not defined"/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.small}/>
        ava + description
      </div>
    </div>
  );
};