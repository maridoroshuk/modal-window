const { Component } = require("react");
const { render } = require("react-dom");

class Button extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}
export default Button;
