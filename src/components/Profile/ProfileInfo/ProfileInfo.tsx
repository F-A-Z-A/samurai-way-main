import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/477388/c8c2b9c4-24d9-494d-8859-22d4ab201049/s1200?webp=false"
             alt="image is not defined"/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};