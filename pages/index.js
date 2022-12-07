import React, { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
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
      "https://images.unsplash.com/photo-1669749268241-fd5e780d7f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    title: "The second Meetup",
    address: "LKH 6754",
  },
  {
    id: "m3",
    image:
      "https://images.unsplash.com/photo-1669330230237-a828c49281df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "The Third Meetup",
    address: "LKH 6754",
  },
];
function Homepage(props) {
  return (
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: Dummy_meetup,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: Dummy_meetup,
    },
  };
}

export default Homepage;
