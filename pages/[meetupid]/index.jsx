import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <div>
      <MeetupDetail
        img="https://th.bing.com/th/id/OIP.TUDe74-_OR6O3P4V-3_FYQHaE7?pid=ImgDet&rs=1"
        title="the first meetup"
        address="Sons stright"
      />
    </div>
  );
}

// export async function getStaticPaths() {
//   return {
//     fallback: false,
//     paths: [
//       {
//         params: {
//           meetupId: "m1".toString(),
//         },
//         params: {
//           meetupId: "m2".toString(),
//         },
//       },
//     ],
//   };
// }

// export async function getStaticProps(context) {
//   const meetupId = context.params.meetupId;
//   console.log(meetupId);
//   return {
//     props: {
//       meetupData: {
//         id: meetupId,
//         img: "https://th.bing.com/th/id/OIP.TUDe74-_OR6O3P4V-3_FYQHaE7?pid=ImgDet&rs=1",
//         title: "the first meetup",
//         address: "Sons stright",
//       },
//     },
//   };
// }

export default MeetupDetails;
