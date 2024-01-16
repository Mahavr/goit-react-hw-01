import { FriendListItem } from "../friendsListItem/FriendListItem";
import css from "./friendList.module.css"


export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friends={friend} />
        </li>
      ))}
    </ul>
  );
};
