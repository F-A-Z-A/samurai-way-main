import * as React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './users.module.css'
import axios from "axios";
import usersPhoto from "../../assets/images/users-photo-1.jpg"

export const Users: React.FC<UsersPropsType> = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
        props.addUsers(response.data.items);
      })
    }
  }
  
  return (
    <div>
      <button onClick={getUsers}>get users</button>
      {props.users.map(u =>
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small === null ? usersPhoto : u.photos.small} className={styles.userPhoto}/>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                : <button onClick={() => props.follow(u.id)}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      )}
    </div>
  );
};