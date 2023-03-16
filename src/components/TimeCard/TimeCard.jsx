import React from "react";
import classes from "./TimeCard.module.css";
import ellipsis from "../../assets/images/icon-ellipsis.svg";

const TimeCard = (props) => {
  return (
    <div className={classes.timeCard}>
      <div className={classes.timeCard__content}>
        <div className={classes.timeCard__content__head}>
          <p>{props.title}</p>
          <img src={ellipsis} alt="ellipsis" />
        </div>
        <div className={classes.timeCard__content__info}>
          <p className={classes.timeCard__content__info__time}>
            {props.timeframes.weekly.current}hrs
          </p>
          <p className={classes.timeCard__content__info__duration}>
            Last Week - {props.timeframes.weekly.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
