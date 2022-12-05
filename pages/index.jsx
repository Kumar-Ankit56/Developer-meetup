import React from "react";
import MeetupList from "../components/meetups/MeetupList";

function Homepage() {
  const Dummy_meetup = [
    {
      id: "m1",
      image:
        "https://th.bing.com/th/id/OIP.TUDe74-_OR6O3P4V-3_FYQHaE7?pid=ImgDet&rs=1",
      title: "The first Meetup",
      address: "LKH 6754",
    },
    {
      id: "m2",
      image:
        "https://th.bing.com/th/id/OIP.TUDe74-_OR6O3P4V-3_FYQHaE7?pid=ImgDet&rs=1",
      title: "The second Meetup",
      address: "LKH 6754",
    },
    {
      id: "m3",
      image:
        "https://th.bing.com/th/id/OIP.TUDe74-_OR6O3P4V-3_FYQHaE7?pid=ImgDet&rs=1",
      title: "The Third Meetup",
      address: "LKH 6754",
    },
  ];
  return (
    <div>
      <MeetupList meetup={Dummy_meetup} />
    </div>
  );
}

export default Homepage;
