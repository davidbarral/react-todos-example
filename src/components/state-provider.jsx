import React, { createContext, useState, useContext, useCallback, useMemo } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

const StateProvider = ({ reducer, initialState, middleware = [], children }) => {
  const [state, setState] = useState(initialState || reducer());

  const dispatch = useCallback((action) => {
    const composedMiddleware = middleware.reduceRight(
      (next, middleware) => {
        const boundMiddleware = middleware(dispatch);
        return boundMiddleware(next);
      },
      (state, action) => reducer(state, action),
    );

    setState((prevState) => {
      const nextState = composedMiddleware(prevState, action);
      return nextState || prevState;
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const api = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );

  return <StateContext.Provider value={api}>{children}</StateContext.Provider>;
};

StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  middleware: PropTypes.arrayOf(PropTypes.func),
  initialState: PropTypes.object,
};

export default StateProvider;

export const useSelector = (mapStateToProp = () => {}) => {
  const api = useContext(StateContext);

  if (!api) {
    throw new Error("Cannot use useSelector outside a StateProvider");
  }

  const { state } = api;
  return mapStateToProp(state);
};

export const useDispatch = (mapDispatchToProp = () => {}) => {
  const api = useContext(StateContext);

  if (!api) {
    throw new Error("Cannot use useDispatch outside a StateProvider");
  }

  const { dispatch } = api;
  return useCallback((...args) => mapDispatchToProp(dispatch, ...args), [mapDispatchToProp, dispatch]);
};

export const Connect = ({ mapDispatchToProps, mapStateToProps, children }) =>
  children({
    ...useSelector(mapStateToProps),
    ...useDispatch(mapDispatchToProps)(),
  });

Connect.propTypes = {
  mapDispatchToProps: PropTypes.func,
  mapStateToProps: PropTypes.func,
};

export const connect = (mapStateToProps, mapDispatchToProps) => (Comp) => {
  const Wrapper = (props) => {
    const connectedProps = {
      ...useSelector(mapStateToProps),
      ...useDispatch(mapDispatchToProps)(),
    };
    return <Comp {...connectedProps} {...props} />;
  };

  Wrapper.displayName = `connect(${Comp.displayName || Comp.name || "Component"})`;

  return Wrapper;
};
