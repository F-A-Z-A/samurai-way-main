import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../redux/store";

type DialogsPropsType = MessagesPageType & {
  // dialogs: DialogType[]
  // messages: MessagesType[]
  // newMessageText: string
  addMessage: () => void
  updateNewMassageText: (text: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  
  const dialogsElements = props.dialogs.map(
    dialog => <DialogItem id={dialog.id} name={dialog.name}/>
  );
  
  const messagesElements = props.messages.map(
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