import React, { Component } from "react";
import { fetchSmurfs } from "../../actions";
import Smurf from "./Smurf";

class SmurfList extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    const { smurfs } = this.props;
    return (
      <div>
        {smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default (mapStateToProps, { fetchSmurfs })(SmurfList);
