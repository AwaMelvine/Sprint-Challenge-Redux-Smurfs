import React, { Component } from "react";
import { addSmurf } from "../../actions";
import { connect } from "react-redux";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const smurf = nextProps.smurfs.find(sm => sm.id === nextProps.currentSmurf);
    this.setState({
      name: smurf ? smurf.name : "",
      age: smurf ? smurf.age : "",
      height: smurf ? smurf.height : ""
    });
  }

  change = event => this.setState({ [event.target.name]: event.target.value });

  submit = event => {
    event.preventDefault();
    this.props.addSmurf(this.state);
  };

  render() {
    const { name, age, height } = this.state;
    return (
      <div className="smurf-form">
        <form onSubmit={event => this.submit(event)}>
          <h3>Add Smurf</h3>
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
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  currentSmurf: state.currentSmurf
});

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
