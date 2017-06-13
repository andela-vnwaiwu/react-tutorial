import React from 'react';
import _ from 'lodash';

/**
 * Component for rendering the game status
 *
 * @param props
 * @returns {HTML}
 */
const DoneStatus = (props) => {
	/**
	 * Render Method for the Stars component
	 */
	return (
		<div className="text-center">
			<h2>{ props.doneStatus }</h2>
			<button className="btn btn-secondary" onClick={ props.resetGame }>Play Again</button>
		</div>
	)
};

export default DoneStatus;