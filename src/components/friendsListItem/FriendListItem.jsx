import css from "./friendsListItem.module.css";

export const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  const friendStatus = isOnline ? css.isOnline : css.isOffline;
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={friendStatus}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
