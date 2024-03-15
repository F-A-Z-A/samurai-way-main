import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
  id: number
  name: string
}
export const DialogItem = (props: DialogItemPropsType) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <img
        src="https://s3-eu-west-1.amazonaws.com/img4.haraj.com.sa/cache4/247x274-1_-k8QCI2WqTCGN8U.jpg"
        alt=":("/>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}