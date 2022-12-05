import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupList() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <div>
      {/* this component is expecting props as functions. */}
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupList;
