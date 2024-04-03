import {ActionsTypes, ProfilePageType} from "./store";

export type AddPostActionType = ReturnType<typeof addPostAC>;
export type UpdateNewPostText = ReturnType<typeof updateNewPostTextAC>;

export const addPostAC = () => {
  return {
    type: "ADD_POST"
  } as const
};
export const updateNewPostTextAC = (newPostText: string) => {
  return {
    type: "UPDATE_NEW_POST_TEXT",
    newPostText: newPostText
  } as const
};

const initialState = {
  posts: [
    {id: 1, message: "Hi! How are you?", likesCount: 12},
    {id: 2, message: "It's my name", likesCount: 11},
    {id: 3, message: "Bla-bla-bla", likesCount: 10},
    {id: 4, message: "Da-da-da", likesCount: 9},
  ],
  newPostText: ""
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case "ADD_POST":
      state.posts.push({
        id: 5,
        message: state.newPostText,
        likesCount: 0
      });
      state.newPostText = "";
      return state;
    case "UPDATE_NEW_POST_TEXT":
      state.newPostText = action.newPostText;
      return state;
    default:
      return state;
  }
};

export default profileReducer;