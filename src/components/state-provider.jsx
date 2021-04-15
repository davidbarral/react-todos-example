import React, { Component, createContext } from "react";
import PropTypes from "prop-types";

const StateContext = createContext({});

class StateProvider extends Component {
  state = this.props.initialState || this.props.reducer();

  dispatch = (action) => {
    this.setState((prevState) => {
      console.group(`dispatch ${action?.type}`);
      console.log("Action", action);
      console.log("Previous state", prevState);

      const nextState = this.props.reducer(prevState, action);

      console.log("Next state", nextState);
      console.groupEnd();

      return nextState;
    });
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
