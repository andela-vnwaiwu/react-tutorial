import React from 'react';
import { render } from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import CardListComponent from './CardListComponent.jsx';
import FormComponent from './FormComponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      cards: []
    }
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }) )
  };

  render () {
    return (
      <div>
        <AwesomeComponent />
        <FormComponent onSubmit={ this.addNewCard }/>
        <CardListComponent cards={ this.state.cards }/>
      </div>
    );
  };
}

render (<App/>, document.getElementById('app'));
