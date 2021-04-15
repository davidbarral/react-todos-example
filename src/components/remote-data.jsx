import { Component } from "react";
import PropTypes from "prop-types";

class RemoteData extends Component {
  state = {
    loading: true,
    error: false,
    data: undefined,
  };

  static propTypes = {
    promise: PropTypes.func.isRequired,
  };

  componentDidMount() {
    Promise.resolve(this.props.promise())
      .then((data) => this.setState({ loading: false, error: false, data }))
      .catch((error) => this.setState({ loading: false, error }));
  }

  render() {
    return this.props.children(this.state);
  }
}

export default RemoteData;
