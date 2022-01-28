const { Component } = require("react");
const { render } = require("react-dom");

class TextButton extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}
export default TextButton;
