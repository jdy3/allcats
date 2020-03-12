import React from "react";
import { getCatData } from "../../utils/getCatData";

const Body = () => {
  const [catData, setCatData] = React.useState(null);
  console.log(`This is catData: ${catData}`);

  const url = `https://5e5932cd7777050014463360.mockapi.io/cats`;
  getCatData(url).then(data => setCatData(data));

  return catData ? (
    <div>
      {catData.map(cat => {
        return (
          <>
            <img src={cat.image} alt="cat" />
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </>
        );
      })}
    </div>
  ) : null;
};

export default Body;
