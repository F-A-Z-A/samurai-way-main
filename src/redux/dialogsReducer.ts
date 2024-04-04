type AddMessageActionType = ReturnType<typeof addMessageAC>;
type UpdateNewMessageText = ReturnType<typeof updateNewMassageTextAC>;
type DialogType = {
  id: number
  name: string
};
export type MessageType = {
  id: number
  message: string
};
export type DialogsInitialStateType = typeof dialogsInitialState;

const dialogsInitialState = {
  dialogs: [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Viktor"},
    {id: 6, name: "Valera"},
  ] as DialogType[],
  messages: [
    {id: 1, message: "Hi-hi"},
    {id: 2, message: "Hey-hey"},
    {id: 3, message: "Yo-yo"},
    {id: 4, message: "Go-go"},
    {id: 5, message: "Wow-Wow"},
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

const dialogsReducer = (
  state: DialogsInitialStateType = dialogsInitialState,
  action: AddMessageActionType | UpdateNewMessageText
): DialogsInitialStateType => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: state.newMessageText}],
        newMessageText: ""
      };
    case "UPDATE_NEW_MESSAGE_TEXT":
      return {...state, newMessageText: action.newMessageText};
    default:
      return state;
  }
};

export default dialogsReducer;