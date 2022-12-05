import React from "react";
export const getStaticProps = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

function HomeContent({ ninjas }) {
  return (
    <div>
      <h1>ALl ninja</h1>
      {/* {console.log(ninjas)} */}
      {ninjas.map((ninja) => (
        <h1 key={post.id}>{ninja.name}</h1>
      ))}
      {/* {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a href="/">
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))} */}
    </div>
  );
}

export default HomeContent;
