import React from "react";
import {StoreType} from "../../redux/store";
import {addMessageAC, updateNewMassageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
  store: StoreType
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
  
  const state = props.store.getState().dialogsPage;
  
  const addMessage = () => {
    props.store.dispatch(addMessageAC());
  };
  
  const updateNewMassageText = (text: string) => {
    props.store.dispatch(updateNewMassageTextAC(text));
  };
  
  return (<Dialogs addMessage={addMessage}
                   updateNewMassageText={updateNewMassageText}
                   dialogs={state.dialogs}
                   messages={state.messages}
                   newMessageText={state.newMessageText}
  />);
};