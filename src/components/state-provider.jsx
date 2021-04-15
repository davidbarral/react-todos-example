import React, { Component, createContext } from "react";
import PropTypes from "prop-types";

const StateContext = createContext({});

class StateProvider extends Component {
  state = this.props.initialState || this.props.reducer();

  static defaultProps = {
    middleware: [],
  };

  static propTypes = {
    reducer: PropTypes.func.isRequired,
    middleware: PropTypes.arrayOf(PropTypes.func),
    initialState: PropTypes.object,
  };

  dispatch = (action) => {
    const composedMiddleware = this.props.middleware.reduceRight(
      (next, middleware) => {
        const boundMiddleware = middleware(this.dispatch);
        return boundMiddleware(next);
      },
      (state, action) => this.props.reducer(state, action),
    );

    const nextState = composedMiddleware(this.state, action);
    if (nextState) {
      this.setState(nextState);
    }
  };

  render() {
    const api = {
      state: this.state,
      dispatch: this.dispatch,
    };

    return <StateContext.Provider value={api}>{this.props.children}</StateContext.Provider>;
  }
}

export default StateProvider;

export const Connect = ({ mapDispatchToProps = () => {}, mapStateToProps = () => {}, children }) => (
  <StateContext.Consumer>
    {({ state, dispatch }) => {
      const connectedProps = {
        ...mapStateToProps(state),
        ...mapDispatchToProps(dispatch, state),
      };
      return children(connectedProps);
    }}
  </StateContext.Consumer>
);

Connect.propTypes = {
  mapDispatchToProps: PropTypes.func,
  mapStateToProps: PropTypes.func,
};

export const connect = (mapStateToProps, mapDispatchToProps) => (Comp) => {
  const Wrapper = (props) => (
    <Connect mapStateToProps={mapStateToProps} mapDispatchToProps={mapDispatchToProps}>
      {(connectedProps) => <Comp {...connectedProps} {...props} />}
    </Connect>
  );

  Wrapper.displayName = `connect(${Comp.displayName || Comp.name || "Component"})`;

  return Wrapper;
};
