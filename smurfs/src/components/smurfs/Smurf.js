import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSmurf } from "../../actions";

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
        <span className="edit-smurf">edit</span>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
