import React from "react";

export { Square }

/**
 * The props class for a React component class is just an interface
 * The props class is connected to the React component class via being a class
 * Template parameter (see declaration of class Square below)
*/
interface SquareProps {
    value: string
}

/**
 * renders a single button that can display text and can be clicked. This
 * button is used to represent a square on the tic-tace-toe board
*/
class Square extends React.Component<SquareProps> {

    render() {
        return (
            <button
                className="square"
                onClick={function () { alert('click') }}
            >
                {/*
                As an exercise, we can pass in a number as an attribute of a
                react component tag.

                In turn this corresponds to an entry in the props dictionary of
                the corresponding react class for the react tag.

                We will dispay this number below, as the square number.

                (Commenting out below as it is just an exercise to show passing
                and reading of props)
                */
                }
                {this.props.value}
            </button>
        );
    }
}