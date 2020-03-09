import React from "react";
import { getCatData } from "../../utils/getCatData";

const Body = () => {
  const [catData, setCatData] = React.useState(null);
  console.log(`This is catData: ${catData}`);

  const url = `https://5e5932cd7777050014463360.mockapi.io/cats`;
  getCatData(url).then(data => setCatData(data));

  return (
    <div>{catData ? <img src={catData[0]["image"]} alt="cat" /> : null}</div>
  );
};

export default Body;
