import {ActionsTypes, ProfilePageType} from "./state";

export type AddPostActionType = ReturnType<typeof addPostAC>;
export type UpdateNewPostText = ReturnType<typeof updateNewPostTextAC>;

export const addPostAC = () => {
  return {
    type: "ADD_POST"
  } as const
}

export const updateNewPostTextAC = (newPostText: string) => {
  return {
    type: "UPDATE_NEW_POST_TEXT",
    newPostText: newPostText
  } as const
}

const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
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
}

export default profileReducer;