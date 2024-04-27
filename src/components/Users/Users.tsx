import * as React from 'react';
import styles from "./users.module.css";
import usersPhoto from "../../assets/images/users-photo-1.jpg";
import {UsersType} from "../../redux/usersReducer";
import {v1} from "uuid";

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChange: (currentPage: number) => void
  users: UsersType[]
  follow: (userID: number) => void
  unfollow: (userID: number) => void
};

export const Users = (props: PropsType) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  
  return (
    <div>
      {pages.map((p) => {
        return <span
          key={v1()}
          className={props.currentPage === p ? styles.selectedPage : styles.basedPage}
          onClick={() => props.onPageChange(p)}
        >{p}</span>
      })}
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