import React, { Component } from "react";

import "./AuthContainer.scss";
import { Modal, Header } from "semantic-ui-react";
import SignIn from "./SignIn";
//import SignUp from "./SignUp";

export default class AuthContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { open: true };
  }

  show = () => {
    this.setState({ open: true });
    this.props.open(true);
  };
  close = () => {
    this.setState({ open: false });
    this.props.open(false);
  };

  render() {
    return (
      <Modal
        open={this.state.open}
        basic
        size="small"
        closeIcon
        closeOnDimmerClick={true}
        closeOnEscape={true}
        onClose={this.close}
      >
        <Header icon="user" content="Login" />
        <Modal.Content>
          <SignIn handleLogin={this.props.handleLogin} open={this.props.open} />
        </Modal.Content>
        {<Modal.Actions />}
      </Modal>
    );
  }
}
