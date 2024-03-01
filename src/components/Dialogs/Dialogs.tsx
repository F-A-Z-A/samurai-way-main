import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = { name: string, id: number }
const DialogItem = (props: DialogItemPropsType) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

type MessagePropsType = { message: string }
const Message = (props: MessagePropsType) => {
  return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id={1} name={"Dimych"}/>
        <DialogItem id={2} name={"Andrey"}/>
        <DialogItem id={3} name={"Sveta"}/>
        <DialogItem id={4} name={"Sasha"}/>
        <DialogItem id={5} name={"Viktor"}/>
        <DialogItem id={6} name={"Valera"}/>
      </div>
      <div className={s.messages}>
        <Message message={"Hi-hi"}/>
        <Message message={"How are you"}/>
        <Message message={"Yo-yo"}/>
      </div>
    </div>
  )
}