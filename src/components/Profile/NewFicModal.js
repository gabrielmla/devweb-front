import React, { Component } from 'react'

import './NewFicModal.scss';
import { Modal, Button, Form } from 'semantic-ui-react';

export default class NewFicModal extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, title: '', synopsis: '', genre: '', categories: [], adult: false};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    //todo
  }

  render() {
    return (
      <div>
        <Button compact floated='right' color="violet" inverted active onClick={this.show}>New Fic</Button>
      </div>
    )
  }
}