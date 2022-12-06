import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {props.meetups0.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
