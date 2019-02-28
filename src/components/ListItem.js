import React, { Component } from "react";
// import SweetAlert from "react-bootstrap-sweetalert";
import Alert from "./Alert";

// destructuring
class ListItem extends Component {
  state = {
    // alert: null // initialising an empty alert
    alertVisible: false
  };

  // showAlert() {
  //   const getAlert = () => (
  //     <SweetAlert
  //       customClass="sweetalert"
  //       title={this.props.photo.description}
  //       confirmBtnText="Close window"
  //       confirmBtnBsStyle="info"
  //       onConfirm={() => this.closeAlert()}
  //     >
  //       <img src={this.props.photo.urls.small} alt={this.props.photo.id} />
  //     </SweetAlert>
  //   );

  //   this.setState({
  //     alert: getAlert() // Fires up the dialog box
  //   });
  // }

  // closeAlert() {
  //   this.setState({
  //     alert: null // colses the dialog window
  //   });
  // }

  changeAlertVisibility = () => {
    console.log("Click");
    this.setState({
      alertVisible: true
    });
  };

  render() {
    return (
      <div key={this.props.photo.id} className="grid__item card">
        <div className="card__body">
          {/* <a href={photo.urls.full} target="_blank" rel="noopener noreferrer"> */}
          <img
            src={this.props.photo.urls.small}
            alt={this.props.photo.id}
            onClick={() => this.changeAlertVisibility()}
          />
        </div>
        <div className="card__footer media">
          <a
            href={this.props.photo.user.links.html}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={this.props.photo.user.profile_image.small}
              alt=""
              className="media__obj"
            />
          </a>
          <div className="media__body">
            <a
              href={this.props.photo.user.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.photo.user.name}
            </a>
          </div>
        </div>
        {/* {this.state.alert} */}

        {this.state.alertVisible ? (
          <Alert
            photoDesc={this.props.photo.description}
            photoPath={this.props.photo.urls.small}
            photoAlt={this.props.photo.id}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default ListItem;
