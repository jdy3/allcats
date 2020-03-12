import React from "react";

export const Profile = cat => {
  return (
    <>
      <img src={cat.image} alt="cat" />
      <h2>{cat.name}</h2>
      <p>{cat.description}</p>
    </>
  );
};
