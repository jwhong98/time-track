import React from "react";
import classes from "./TimeCard.module.css";
import ellipsis from "../../assets/images/icon-ellipsis.svg";

const TimeCard = (props) => {
  return (
    <div className={classes.timeCard}>
      <div className={classes.timeCard__content}>
        <div className={classes.timeCard__content__head}>
          <p>Work</p>
          <img src={ellipsis} alt="ellipsis" />
        </div>
        <div className={classes.timeCard__content__info}>
          <p className={classes.timeCard__content__info__time}>32hrs</p>
          <p className={classes.timeCard__content__info__duration}>
            Last Week - 36hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
