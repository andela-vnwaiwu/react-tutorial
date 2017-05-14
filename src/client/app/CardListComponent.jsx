import React from 'react';

import CardComponent from './CardComponent.jsx';

const CardListComponent = (props) => {
  return (
    <div>
      { props.cards.map(card => <CardComponent {...card} key={ card.id }/> )}
    </div>
  );
}

export default CardListComponent;