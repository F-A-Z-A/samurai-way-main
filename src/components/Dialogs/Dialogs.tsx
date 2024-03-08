import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType, MessagesPropsType, PostsPropsType} from "../../index";

type DialogsPropsType = {
  dialogs: DialogPropsType[]
  messages: MessagesPropsType[]
}

export const Dialogs = (props: DialogsPropsType) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)}
      </div>
      <div className={s.messages}>
        {props.messages.map(message => <Message id={message.id} message={message.message}/>)}
      </div>
    </div>
  )
}