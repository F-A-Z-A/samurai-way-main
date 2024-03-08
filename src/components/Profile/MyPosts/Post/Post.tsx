import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
  id: number
  message: string
  likeCount: number
}
export const Post = (props: PostPropsType) => {
  return (
    <div className={s.item}>
      <img
        src="https://s3-eu-west-1.amazonaws.com/img4.haraj.com.sa/cache4/247x274-1_-k8QCI2WqTCGN8U.jpg"
        alt=":("/>
      {props.message}
      <div>
        <span>like - </span>
        {props.likeCount}
      </div>
    </div>
  );
};