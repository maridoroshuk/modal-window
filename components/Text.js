import { Component } from "react";

class Text extends Component {
  render() {
    const Tag = this.props.as;
    return <Tag>{this.props.children}</Tag>;
  }
}

export default Text;
