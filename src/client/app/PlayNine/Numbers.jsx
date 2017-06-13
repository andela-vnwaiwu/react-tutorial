import React from 'react';
import _ from 'lodash';

/**
 * NumberComponent that displays the list of numbers
 *
 * @param props
 *
 * @returns {HTML}
 */
const Numbers = (props) => {
	/**
	 * Assigns the selected number a class of selected
	 *
	 * @param number
	 *
	 * @returns {string}
	 */
	const numberClassName =  (number) => {
		if(props.usedNumbers.indexOf(number) >= 0) {
			return 'used';
		}

		if(props.selectedNumbers.indexOf(number) >= 0) {
			return 'selected';
		}
	};

	/**
	 * Render Method for the Number component
	 */
	return (
		<div className="card text-center">
			<div>
				{ Numbers.list.map((number, i) =>
					<span key={i} className={ numberClassName(number)} onClick={() => props.selectNumber(number)}>{ number }</span>
				) }
			</div>
		</div>
	)
};

Numbers.list = _.range(1, 10);

export default Numbers;
