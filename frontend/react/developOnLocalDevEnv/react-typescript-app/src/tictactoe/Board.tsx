import React from "react";
import { Square } from "./Square";

export { Board }

/**
 * Renders the 9 squares on the tic-tac-toe board using the 'Square' React
 * component that we have defined in a separate file. This shows how React
 * components can be nested inside each other.
 */
class Board extends React.Component {

	render() {
		const status = 'Next player: X';

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}

	/**
	 * sub-function of render
	 * @private
	*/
	renderSquare(i: number) {
		return <Square value={i + ''} />;
	}

}