import React, {useRef} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType, MessagesPagePropsType, MessagesPropsType, PostsPropsType} from "../../redux/state";

type DialogsPropsType = {
  state: MessagesPagePropsType
}

export const Dialogs = (props: DialogsPropsType) => {
  
  const dialogsElements = props.state.dialogs.map(
    dialog => <DialogItem id={dialog.id} name={dialog.name}/>
  )
  const messagesElements = props.state.messages.map(
    message => <Message id={message.id} message={message.message}/>
  )
  
  const newMessageElement = useRef<HTMLTextAreaElement>(null);
  
  const addMessage = () => {
    const text: string | undefined = newMessageElement.current?.value;
    console.log(text)
  }
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  )
}