'use strict';

export default class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    
    //see https://reactjs.org/docs/react-api.html#createelement
    //You will not typically invoke React.createElement() directly if you are using JSX.
    //However as per https://reactjs.org/docs/react-without-jsx.html you may need build env for JSX.
    //React.createElement(type,[props],[...children])
    return React.createElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
