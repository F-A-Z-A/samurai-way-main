import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addUsersAC, followAC, unfollowAC, UsersInitialStateType, UsersType} from "../../redux/usersReducer";
import {Users} from "./Users";


type MapStateToPropsType = UsersInitialStateType
type MapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  addUsers: (users: UsersType[]) => void
};

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID: number) => {
      dispatch(unfollowAC(userID))
    },
    addUsers: (users: UsersType[]) => {
      dispatch(addUsersAC(users))
    }
  }
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

