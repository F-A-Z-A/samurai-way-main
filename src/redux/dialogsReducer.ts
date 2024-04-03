import {ActionsTypes, MessagesPageType} from "./store";

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

const initialState = {
  dialogs: [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"},
  ],
  messages: [
    {id: 1, message: "Hi-hi"},
    {id: 2, message: "Hey-hey"},
    {id: 3, message: "Yo-yo"},
    {id: 4, message: "Go-go"},
    {id: 5, message: "Wow-Wow"},
  ],
  newMessageText: ""
}

const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsTypes): MessagesPageType => {
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