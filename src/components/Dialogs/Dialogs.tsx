import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {
  
  const dialogsElements = props.dialogsPage.dialogs.map(
    dialog => <DialogItem id={dialog.id} name={dialog.name}/>
  );
  
  const messagesElements = props.dialogsPage.messages.map(
    message => <Message id={message.id} message={message.message}/>
  );
  
  const addMessage = () => {
    props.addMessage();
  };
  
  const updateNewMassageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMassageText(e.currentTarget.value);
  };
  
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
          <textarea
            value={props.dialogsPage.newMessageText}
            onChange={updateNewMassageText}
            placeholder={"Enter your message"}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};