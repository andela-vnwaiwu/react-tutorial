import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class AwesomeComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      likesCount: 0
    };
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    let newLikesCount =  this.state.likesCount + 1;
    this.setState({
      likesCount: newLikesCount
    })
  }

  render() {
    return (
      <div className="row likes-counter">
        <div className="col-sm-12">
          <div className="col-sm-6">
            <Button bsStyle="primary" onClick={ this.onLike }>Like Me</Button>
          </div>
          <div className="col-sm-6">
            <p className="text-left">Likes: <span>{ this.state.likesCount }</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

}

export default AwesomeComponent;