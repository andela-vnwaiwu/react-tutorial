import React from 'react';

import FormComponent from './FormComponent.jsx';
import CardListComponent from './CardListComponent.jsx';

class GithubIndexComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }) )
  }

  render () {
    return (
      <div className="row">
        <FormComponent onSubmit={ this.addNewCard }/>
        <CardListComponent cards={ this.state.cards }/>
      </div>
    );
  };
};

export default GithubIndexComponent;