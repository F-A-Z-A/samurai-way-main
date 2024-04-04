import React from "react";
import {addMessageAC, updateNewMassageTextAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../store-context";

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const state = store.getState().dialogsPage;
        const addMessage = () => {
          store.dispatch(addMessageAC());
        };
        const updateNewMassageText = (text: string) => {
          store.dispatch(updateNewMassageTextAC(text))
        };
        return (
          <Dialogs addMessage={addMessage}
                   updateNewMassageText={updateNewMassageText}
                   dialogs={state.dialogs}
                   messages={state.messages}
                   newMessageText={state.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  )
};