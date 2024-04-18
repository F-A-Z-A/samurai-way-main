import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addUsersAC, followAC, unfollowAC, UsersInitialStateType, UsersType} from "../../redux/usersReducer";


type MapStateToPropsType = UsersInitialStateType
type MapDispatchToPropsType = {
  follow: (userID: string) => void
  unfollow: (userID: string) => void
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
    follow: (userID: string) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID: string) => {
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

