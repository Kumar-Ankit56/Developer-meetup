import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupList() {
  async function addMeetupHandler(enteredMeetupData) {
    const respose = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await respose.json();

    console.log(data);
  }
  return (
    <div>
      {/* this component is expecting props as functions. */}
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupList;
