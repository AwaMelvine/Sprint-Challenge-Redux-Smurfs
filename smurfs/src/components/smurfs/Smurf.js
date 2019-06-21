import React from "react";

const Smurf = ({ smurf }) => {
  return (
    <div>
      <h3>{smurf.name}</h3>
      <h3>{`${smurf.age} years old`}</h3>
      <h3>{`${smurf.height} tall`}</h3>
    </div>
  );
};

export default Smurf;
