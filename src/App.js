import React from 'react';
import sudoku from 'sudoku-umd';

import Board from './components/Board/Board';

import './App.scss';
import { Button, Container } from 'reactstrap';

class App extends React.Component {

	constructor(props) {
		super(props);
		const board = sudoku.generate();

		this.state = {
			initialBoard: board,
			board: board.slice()
		}

		this.newGame = this.newGame.bind(this);
		this.restart = this.restart.bind(this);
		this.showSolution = this.showSolution.bind(this);
		this.solveGame = this.solveGame.bind(this);
	}

	newGame() {
		const board = sudoku.generate();

		this.setState({
			initialBoard: board,
			board: board.slice()
		})
	}

	restart() {
		this.setState({
			board: this.state.initialBoard
		});
	}

	showSolution() {
		const solution = sudoku.solve(this.state.initialBoard);
		if (solution) {
			this.setState({
				board: solution
			});
		}
	}

	solveGame() {
		const solution = sudoku.solve(this.state.initialBoard);
		const playerSolution = this.state.board;

		if(solution === playerSolution) {
			alert ('Congratulations! You solved it!');
			
		} else {
			alert ('Your solution is not correct. Try again!');
		}
	}

	onChange(i, value) {
		value = value > 9 ? value[1] : value;
		console.log(i, value);
		const updatedBoard = this.state.board.slice(0, i) + (value.length > 0 ? value : '.') + this.state.board.slice(i + 1);
		this.setState({
			board: updatedBoard
		})
	}

	render() {
		return (
			<Container className='App'>
				<h1>Sudoku</h1>
				<Board className='board' board={this.state.board} initialBoard={this.state.initialBoard} onChange={this.onChange.bind(this)} />
				<div className='buttons'>
					<Button color='secondary' onClick={this.showSolution}>Check</Button>
					<Button color='secondary' onClick={this.restart}>Restart</Button>
					<Button color='primary' onClick={this.solveGame}>Solve</Button>
					<Button color='primary' onClick={this.newGame}>New game</Button>
				</div>
			</Container>
		);
	}
}

export default App;