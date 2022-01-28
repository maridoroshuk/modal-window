const { Component } = require("react");
const { render } = require("react-dom");

class Headline extends Component {
  render() {
    const Tag = this.props.as;
    return <Tag>{this.props.children}</Tag>;
  }
}
export default Headline;
