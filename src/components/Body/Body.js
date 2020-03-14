import React from "react";
import { getCatData } from "../../utils/getCatData";
import { Profile } from "../Profile/Profile";
import "./Body.css";

const Body = () => {
  const [catData, setCatData] = React.useState(null);
  console.log(`This is catData: ${catData}`);

  const url = `https://5e5932cd7777050014463360.mockapi.io/cats`;
  getCatData(url).then(data => setCatData(data));

  return catData ? (
    <div className="profileContainer">
      {catData.map(cat => {
        return (
          <div className="profile">
            <img src={cat.image} alt="cat" />
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
            <button>Take Home</button>
          </div>
        );
      })}
    </div>
  ) : null;
};

export default Body;
