import React from 'react';
import _ from 'lodash';

import Button from './Button.jsx';
import Stars from './Stars.jsx';
import Answers from './Answers.jsx';
import Numbers from './Numbers.jsx';
import DoneStatus from './DoneStatus.jsx';
import Timer from './Timer.jsx';

import possibleCombinationSum from './GameCalculation.helper.js';

/**
 * Game Component
 */
class Game extends React.Component {
	constructor(props) {
		super(props);
		
		this.setTimer();
		// state of different properties in the Component and child components
		this.state = Game.initialState();
	};

	static initialState = () => ({
		selectedNumbers: [],
		randomNumberOfStars: Game.randomNumber(),
		correctAnswer: null,
		usedNumbers: [],
		redraws: 5,
		doneStatus: null,
		time: 60
	})

	/**
	 * Generate a random number between 1 - 9 
	 */
	static randomNumber = () => 1 + Math.floor(Math.random() * 9);

	/**
	 * Resets the game and start a new one
	 */
	resetGame = () => this.setState(Game.initialState());

	/**
	 * Select a number from the list of displayed number in the number component
	 *
	 * @param  clickedNumber
	 *
	 * @return {void}
	 */
	selectNumber = (clickedNumber) => {
		if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
			return;
		}

		this.setState(prevState => ({
			correctAnswer: null,
			selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
		}));
	};

	/**
	 * Deselects a number from the list of select numbers in the Answer component
	 *
	 * @param clickedNumber
	 *
	 * @return {void}
	 */
	deselectNumber = (clickedNumber) => {
		this.setState(prevState => ({
			correctAnswer: null,
			selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
		}));
	};

	/**
	 * Checks if the selected number is correct compared to the number of stars
	 */
	checkAnswer = () => {
		this.setState(prevState => ({
			correctAnswer: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((total, next) => total + next, 0)
		}));
	};

	/**
	 * Checks if the remaining numbers can find match the remaining stars
	 */
	possibleSolutions = ({ randomNumberOfStars, usedNumbers }) => {
		const possibleNumbers = _.range(1, 10).filter(number => 
			usedNumbers.indexOf(number) === -1
		);

		return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
	}

	/**
	 * Checks if game is over or won
	 */
	updateDoneStatus = () => {
		this.setState(prevState => {
			if (prevState.usedNumbers.length === 9) {
				return { doneStatus: 'Done, Nice!' };
			}
			if ((prevState.redraws === 0 && !this.possibleSolutions(prevState)) || prevState.time === 0) {
				return { doneStatus: 'Game Over!' }
			}
		});
	}

	/**
	 * Takes the selected answer and pushes it to the list of selected number and generates
	 * another set of star s for the next round
	 */
	acceptAnswer = () => {
		this.checkAnswer();
		this.setState(prevState => ({
			usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
			selectedNumbers: [],
			correctAnswer: null,
			randomNumberOfStars: Game.randomNumber(),
		}), this.updateDoneStatus);
	};

	/**
	 * Redraws another set of stars when the displayed stars does not not have a number that matches
	 */
	redraw = () => {
		if (this.state.redraws == 0) { return; };
		this.setState(prevState => ({
			randomNumberOfStars: Game.randomNumber(),
			correctAnswer: null,
			selectNumber: [],
			redraws: prevState.redraws - 1,
		}), this.updateDoneStatus);
	}

	setTimer = () => {
		var self =  this;
		var timer = 60;

		const count = setInterval(function() {
			timer -= 1;
			console.log(timer)
			self.setState(prevState => ({
				time: prevState.time - 1
			}));

			if (timer < 1 || self.state.doneStatus === 'Game Over!') {
				clearInterval(count);

				self.setState(prevState => ({
					doneStatus: 'Game Over!'
				}));
				
			}
		}, 1000);
	}

	/**
	 *
	 * @returns {HTML}
	 */
	render() {
		const { 
			selectedNumbers,
			randomNumberOfStars,
			correctAnswer,
			usedNumbers,
			redraws,
			doneStatus,
			time 
		} = this.state;

		return(
			<div className="row">

				<div className="row">
					<div className="col-sm-9">
						<h3 className="text-center">Play-Nine Game</h3>
					</div>
					<div className="col-sm-3">
						<Timer 
							time={ time }
						/>
					</div>
				</div>

				<hr/>

				<div className="row">
					<Stars 
						numberOfStars={ randomNumberOfStars }
					/>

					<Button
						correctAnswer={ correctAnswer }
						selectedNumbers={ selectedNumbers }
						checkAnswer={ this.checkAnswer }
						acceptAnswer={ this.acceptAnswer }
						redraw={ this.redraw }
						redraws={ redraws }
					/>

					<Answers 
						selectedNumbers={ selectedNumbers } 
						deselectNumber={ this.deselectNumber }
					/>
				</div>

				<hr/>
				<br/>

				{ doneStatus 
					? 
					<DoneStatus 
						doneStatus={ doneStatus }
						resetGame={ this.resetGame } 
					/> 
					: 
					<Numbers 
						selectedNumbers={ selectedNumbers } 
						selectNumber={ this.selectNumber } 
						usedNumbers={ usedNumbers}
					/> 
				}
			</div>
		);
	};
};

export default Game;