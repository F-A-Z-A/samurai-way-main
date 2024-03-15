import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType, MessagesPagePropsType, MessagesPropsType, PostsPropsType} from "../../redux/state";

type DialogsPropsType = {
  state: MessagesPagePropsType
}

export const Dialogs = (props: DialogsPropsType) => {
  
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)}
      </div>
      <div className={s.messages}>
        {props.state.messages.map(message => <Message id={message.id} message={message.message}/>)}
      </div>
    </div>
  )
}