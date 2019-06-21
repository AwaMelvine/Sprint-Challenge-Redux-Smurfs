import React, { Component } from "react";
import { addSmurf, updateSmurf } from "../../actions";
import { connect } from "react-redux";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      age: "",
      height: "",
      editing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const smurf = nextProps.smurfs.find(sm => sm.id === nextProps.currentSmurf);
    this.setState({
      id: smurf ? smurf.id : "",
      name: smurf ? smurf.name : "",
      age: smurf ? smurf.age : "",
      height: smurf ? smurf.height : "",
      editing: nextProps.editing
    });
  }

  change = event => this.setState({ [event.target.name]: event.target.value });

  submit = event => {
    event.preventDefault();
    this.props.addSmurf(this.state);
  };

  update = event => {
    event.preventDefault();
    this.props.updateSmurf(this.state);
  };

  render() {
    const { name, age, height } = this.state;
    const { editing } = this.props;
    return (
      <div className="smurf-form">
        <form
          onSubmit={event => {
            if (editing) {
              this.update(event);
            } else {
              this.submit(event);
            }
            this.setState({
              id: "",
              name: "",
              age: "",
              height: ""
            });
          }}
        >
          {editing ? <h3>Update Smurf</h3> : <h3>Add Smurf</h3>}
          <input
            placeholder="Name"
            value={name}
            onChange={this.change}
            name="name"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={this.change}
            name="age"
          />
          <input
            placeholder="Height"
            value={height}
            onChange={this.change}
            name="height"
          />
          {editing ? (
            <button
              className="edit"
              type="submit"
              style={{ background: "#073B3A" }}
            >
              Update Smurf
            </button>
          ) : (
            <button type="submit">Add to the village</button>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  currentSmurf: state.currentSmurf,
  editing: state.editing
});

export default connect(
  mapStateToProps,
  { addSmurf, updateSmurf }
)(SmurfForm);
