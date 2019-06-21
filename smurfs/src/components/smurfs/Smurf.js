import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSmurf, setCurrentSmurf } from "../../actions";

class Smurf extends Component {
  render() {
    const { smurf } = this.props;
    return (
      <div className="smurf">
        <h3>{smurf.name}</h3>
        <p>{`${smurf.age} years old`}</p>
        <p>{`${smurf.height} tall`}</p>
        <span
          className="delete-smurf"
          onClick={() => this.props.deleteSmurf(smurf.id)}
        >
          x
        </span>
        <span
          className="edit-smurf"
          onClick={() => this.props.setCurrentSmurf(smurf.id)}
        >
          edit
        </span>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteSmurf, setCurrentSmurf }
)(Smurf);
