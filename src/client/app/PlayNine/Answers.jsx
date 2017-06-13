import React from 'react';

/**
 * Answer Component that displays the selected answer
 *
 * @param props
 *
 * @returns {HTML}
 */
const Answers = (props) => {
	/**
	 * Render Method for the Answer component
	 */
	return (
		<div className="col-md-5">
			{ props.selectedNumbers.map((number, i) =>
				<span key={i} onClick={() => props.deselectNumber(number)}>{number}</span>
			) }
		</div>
	)
}

export default Answers;