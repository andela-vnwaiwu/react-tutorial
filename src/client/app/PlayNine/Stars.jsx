import React from 'react';
import _ from 'lodash';

/**
 * Component for rendering the stars
 *
 * @param props
 * @returns {HTML}
 */
const Stars = (props) => {
	/**
	 * Render Method for the Stars component
	 */
	return (
		<div className="col-md-5">
			{ _.range(props.numberOfStars).map(i =>
				<i key={i} className="fa fa-star"></i>
			) }
		</div>
	)
};

export default Stars;