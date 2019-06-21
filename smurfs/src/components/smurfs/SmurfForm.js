import React, { Component } from "react";

class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  change = event => this.setState({ [event.target.name]: event.target.value });

  submit = event => {
    event.preventDefault();
    console.log(this.state);
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
export default SmurfForm;
