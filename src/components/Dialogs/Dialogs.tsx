import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {
  
  const dialogsElements = props.dialogs.map(
    d => <DialogItem key={d.id} id={d.id} name={d.name}/>
  );
  
  const messagesElements = props.messages.map(
    m => <Message key={m.id} id={m.id} message={m.message}/>
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
            value={props.newMessageText}
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