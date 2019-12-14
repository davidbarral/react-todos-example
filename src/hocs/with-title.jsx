import React, { Component } from "react";

const withTitle = (Comp) => {
  class Wrapper extends Component {
    componentDidMount() {
      document.title = this.props.title || document.title;
    }

    render() {
      const { title, ...rest } = this.props;
      return <Comp {...rest} />;
    }
  }

  Wrapper.displayName = `withTitle(${Component.displayName || Component.name || "Component"})`;

  return Wrapper;
};

export default withTitle;
