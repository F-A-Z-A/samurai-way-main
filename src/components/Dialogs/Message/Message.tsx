import s from "../Dialogs.module.css";
import React from "react";
import {MessagesPropsType} from "../../../redux/state";

export const Message = (props: MessagesPropsType) => {
  return <div className={s.message}>{props.message}</div>
}