import {addPost, ProfileStateType, updateNewPostText} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";

type MapStateToPropsType = {
  profilePage: ProfileStateType
};
type MapDispatchToPropsType = {
  addPost: () => void
  updateNewPostText: (text: string) => void
  // если нет return в функции, то она ничего не возвращает, поэтому здесь void
};

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    profilePage: state.profilePage
  }
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  // Dispatch импортировать только из Redux (будет на ваыбор еще React)
  return {
    addPost: () => {
      dispatch(addPost());
    },
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostText(text));
    }
  }
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
// ()() - вызываем функцию connect, которая возвращает функцию, которая сразу вызывается