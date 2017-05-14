import React from 'react';
import axios from 'axios';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: Form Submitted', this.state.userName);
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(response => {
        this.props.onSubmit(response.data)
        this.setState({ userName: '' })
      });
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" 
          value={ this.state.userName }
          onChange={(event) => this.setState({ userName: event.target.value })}
          placeholder="Github Username" required/>

        <button type="submit">Add Card</button>
      </form>
    );
  }
}

export default FormComponent;