import React from 'react';
import _ from 'lodash';

/**
 * Component for rendering the timer
 *
 * @param props
 * @returns {HTML}
 */
const Timer = (props) => {
	/**
	 * Render Method for the Timer component
	 */
	return (
		<div className="col-md-12">
      <h2>Timer</h2>
			<h3>{ props.time } secs</h3>
		</div>
	)
};

export default Timer;