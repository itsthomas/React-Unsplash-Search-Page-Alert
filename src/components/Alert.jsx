import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

// Creating custom dialog alerts using React-Bootstrap-Sweetalert
// http://djorg83.github.io/react-bootstrap-sweetalert/

class Alert extends Component {
  state = {
    alert: null // initialising an empty alert
  };

  componentDidMount() {
    this.showAlert();
    // console.log(this.props);
  }

  showAlert() {
    const getAlert = () => (
      <SweetAlert
        customClass="sweetalert"
        title={this.props.photoDesc}
        confirmBtnText="Close window"
        confirmBtnBsStyle="info"
        onConfirm={() => this.closeAlert()}
      >
        <img src={this.props.photoPath} alt={this.props.photoAlt} />
      </SweetAlert>
    );

    this.setState({
      alert: getAlert() // Fires up the dialog box
    });
  }

  closeAlert() {
    this.setState({
      alert: null // Colsesthe dialog window
    });
  }

  render() {
    return <>{this.state.alert}</>;
  }
}

export default Alert;
