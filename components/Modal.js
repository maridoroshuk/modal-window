import { Component } from "react";

class Modal extends Component {
  dissmiss() {
    this.props.onClose();
  }

  render() {
    return (
      <>
        <div>{this.props.children(this.dissmiss.bind(this))}</div>
      </>
    );
  }
}
export default Modal;
