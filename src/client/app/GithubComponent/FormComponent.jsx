import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/lib/Button';

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
      })
      .catch((error) => {
        console.log(error, 'There was an error')
      });
  };

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={ this.handleSubmit }>
          <input type="text" 
            value={ this.state.userName }
            onChange={(event) => this.setState({ userName: event.target.value })}
            placeholder="Github Username" required/>

          <Button bsStyle="success" type="submit">Add Card</Button>
        </form>
      </div>
    );
  }
}

export default FormComponent;