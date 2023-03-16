import React from "react";
import classes from "./UserCard.module.css";
import profileImg from "../../assets/images/image-jeremy.png";

const UserCard = () => {
  return (
    <div className={classes.userCard}>
      <div className={classes.userCard__head}>
        <img src={profileImg} alt="Profile" />
        <div className={classes.userCard__head__text}>
          <p>Report for</p>
          <p className={classes.userCard__head__text__name}>Jeremy Robson</p>
        </div>
      </div>
      <div className={classes.userCard__filters}>
        <p className={classes.userCard__filters__filter}>Daily</p>
        <p className={classes.userCard__filters__filter}>Weekly</p>
        <p className={classes.userCard__filters__filter}>Monthly</p>
      </div>
    </div>
  );
};

export default UserCard;
