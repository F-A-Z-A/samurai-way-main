import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPagePropsType} from "../../redux/state";

type DialogsPropsType = {
  state: MessagesPagePropsType
  addMessage: () => void
  updateNewMessageText: (newMessageText: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
  
  const dialogsElements = props.state.dialogs.map(
    dialog => <DialogItem id={dialog.id} name={dialog.name}/>
  )
  const messagesElements = props.state.messages.map(
    message => <Message id={message.id} message={message.message}/>
  )
  
  // const newMessageElement = useRef<HTMLTextAreaElement>(null);
  // const addMessage = () => {
  // const text = newMessageElement.current?.value;
  // console.log(text)
  // }
  
  const addMessage = () => {
    props.addMessage()
  }
  
  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageText(e.currentTarget.value)
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
          {/*<textarea ref={newMessageElement}></textarea>*/}
          <textarea
            value={props.state.newMessageText}
            onChange={onMessageChange}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  )
}