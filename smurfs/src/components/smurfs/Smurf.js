import React from "react";

const Smurf = ({ smurf }) => {
  return (
    <div className="smurf">
      <h3>{smurf.name}</h3>
      <p>{`${smurf.age} years old`}</p>
      <p>{`${smurf.height} tall`}</p>
      <span className="delete-smurf">x</span>
      <span className="edit-smurf">edit</span>
    </div>
  );
};

export default Smurf;
