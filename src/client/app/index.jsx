import React from 'react';
import { render } from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import GithubIndexComponent from './GithubComponent/GithubIndexComponent.jsx';
import Game from './PlayNine/Game.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div className="container">
        <AwesomeComponent />
        <GithubIndexComponent />
        <Game />
      </div>
    );
  };
}

render (<App/>, document.getElementById('app'));
