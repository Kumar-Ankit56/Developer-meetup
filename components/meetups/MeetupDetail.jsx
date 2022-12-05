import React from "react";
import styles from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <div>
      <section className={styles.detail}>
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
      </section>
    </div>
  );
}

export default MeetupDetail;
