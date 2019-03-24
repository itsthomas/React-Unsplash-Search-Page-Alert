import React, { Component } from "react";
import Alert from "./Alert";

class ListItem extends Component {
  state = {
    alertVisible: false
  };

  changeAlertVisibility = () => {
    this.setState(prevState => ({
      alertVisible: !prevState.alertVisible
    }));
  };

  render() {
    return (
      <div key={this.props.photo.id} className="grid__item card">
        <div className="card__body">
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
        {this.state.alertVisible ? (
          <Alert
            photoDesc={this.props.photo.description}
            photoPath={this.props.photo.urls.small}
            photoAlt={this.props.photo.id}
            onClose={this.changeAlertVisibility}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default ListItem;
