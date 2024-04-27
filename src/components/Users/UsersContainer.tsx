import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
  addUsersAC,
  followAC,
  setCurrentPageAC, setTotalUsersCountAC,
  unfollowAC,
  UsersInitialStateType,
  UsersType
} from "../../redux/usersReducer";
import {Users} from "./Users";


type MapStateToPropsType = UsersInitialStateType
type MapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  addUsers: (users: UsersType[]) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
};

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (totalUsersCount: number) => {
      dispatch(setTotalUsersCountAC(totalUsersCount))
    }
  }
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

