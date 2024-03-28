import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, MessagesPageType} from "../../redux/state";
import {addMessageAC, updateNewMassageTextAC} from "../../redux/dialogsReducer";

type DialogsPropsType = {
  state: MessagesPageType
  dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  
  const dialogsElements = props.state.dialogs.map(
    dialog => <DialogItem id={dialog.id} name={dialog.name}/>
  );
  
  const messagesElements = props.state.messages.map(
    message => <Message id={message.id} message={message.message}/>
  );
  
  const addMessage = () => {
    props.dispatch(addMessageAC());
  };
  
  const updateNewMassageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMassageTextAC(e.currentTarget.value));
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
            value={props.state.newMessageText}
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