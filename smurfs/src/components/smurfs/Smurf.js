import React from "react";

const Smurf = ({ smurf }) => {
  return (
    <div className="smurf">
      <h3>{smurf.name}</h3>
      <p>{`${smurf.age} years old`}</p>
      <p>{`${smurf.height} tall`}</p>
    </div>
  );
};

export default Smurf;
