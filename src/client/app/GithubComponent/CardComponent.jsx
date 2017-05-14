import React from 'react';

const CardComponent = (props) => {
  return (
    <div className="col-sm-4" style={{ margin: '1em'}}>
      <img width="75" src={ props.avatar_url }/>
      <div style={
        { display: 'inline-block',
          marginLeft: '10px'
        }
      }>
      <div style={
        {
          fontSize: '1.25em',
          fontWeight: 'bold',
        }
      }>
        { props.name }
      </div>
        <div>{ props.company }</div>
      </div>
    </div>
  );
}

export default CardComponent;