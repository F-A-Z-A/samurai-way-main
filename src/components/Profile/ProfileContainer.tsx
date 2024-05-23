import React from 'react';
import {Profile} from "./Profile";
import {ProfileStateType, ProfileType, setUserProfile} from "../../redux/profileReducer";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

class ProfileContainer extends React.Component<any> { // todo: fix any
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      })
  }
  
  render() {
    return <Profile {...this.props as ProfileStateType} profile={this.props.profile}/>
  }
}

const mapStateToProps = (state: AppStateType): ProfileStateType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
  }
}

export default connect(
  mapStateToProps,
  {setUserProfile}
)(ProfileContainer)