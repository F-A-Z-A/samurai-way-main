import {v1} from "uuid";

type AddMessageActionType = ReturnType<typeof addMessageAC>;
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMassageTextAC>;
type DialogType = {
  id: string
  name: string
};
export type MessageType = {
  id: string
  message: string
};
export type DialogsInitialStateType = typeof dialogsInitialState;

const dialogsInitialState = {
  dialogs: [
    {id: v1(), name: "Dimych"},
    {id: v1(), name: "Andrey"},
    {id: v1(), name: "Sveta"},
    {id: v1(), name: "Sasha"},
    {id: v1(), name: "Viktor"},
    {id: v1(), name: "Valera"},
  ] as DialogType[],
  messages: [
    {id: v1(), message: "Hi-hi"},
    {id: v1(), message: "Hey-hey"},
    {id: v1(), message: "Yo-yo"},
    {id: v1(), message: "Go-go"},
    {id: v1(), message: "Wow-Wow"},
  ] as MessageType[],
  newMessageText: ""
};

export const addMessageAC = () => {
  return {
    type: "ADD_MESSAGE"
  } as const
};
export const updateNewMassageTextAC = (newMessageText: string) => {
  return {
    type: "UPDATE_NEW_MESSAGE_TEXT",
    newMessageText: newMessageText
  } as const
};

export const dialogsReducer = (
  state: DialogsInitialStateType = dialogsInitialState,
  action: AddMessageActionType | UpdateNewMessageTextActionType
): DialogsInitialStateType => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, {id: v1(), message: state.newMessageText}],
        newMessageText: ""
      };
    case "UPDATE_NEW_MESSAGE_TEXT":
      return {...state, newMessageText: action.newMessageText};
    default:
      return state;
  }
};