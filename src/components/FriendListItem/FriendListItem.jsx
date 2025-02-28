import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClasses = clsx(
    css.text,
    isOnline ? css.onlineText : css.offlineText
  );

  return (
    <div className={css.listItem}>
      <img src={avatar} alt="Avatar" width="48"></img>
      <p className={css.text}>{name}</p>
      <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
