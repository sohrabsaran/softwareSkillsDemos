import React from "react";
import { Board } from "./Board";

export { Game }

/**
 * renders the Board UI component, along with the game status and game history
*/
class Game extends React.Component {

    //Unfortunately, forgetting to define render() results in a runtime error
    //rather than a compile-time one. Perhaps it is a limitation of typescript,
    //OR typescript has not been used effectively?
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
