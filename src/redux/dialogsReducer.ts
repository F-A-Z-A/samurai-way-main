import {ActionsTypes, MessagesPageType} from "./state";

export type AddMessageActionType = ReturnType<typeof addMessageAC>;
export type UpdateNewMessageText = ReturnType<typeof updateNewMassageTextAC>;
export const addMessageAC = () => {
  return {
    type: "ADD_MESSAGE"
  } as const
}
export const updateNewMassageTextAC = (newMessageText: string) => {
  return {
    type: "UPDATE_NEW_MESSAGE_TEXT",
    newMessageText: newMessageText
  } as const
}
const dialogsReducer = (state: MessagesPageType, action: ActionsTypes): MessagesPageType => {
  switch (action.type) {
    case "ADD_MESSAGE":
      state.messages.push({
        id: 6,
        message: state.newMessageText
      });
      state.newMessageText = "";
      return state;
    case "UPDATE_NEW_MESSAGE_TEXT":
      state.newMessageText = action.newMessageText;
      return state;
    default:
      return state;
  }
}

export default dialogsReducer