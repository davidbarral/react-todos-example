import { useRef, useState, useEffect } from "react";

const useRemoteData = (promise, { polling } = {}) => {
  const [state, setState] = useState({ loading: true, error: false, data: null });
  const promiseRef = useRef();
  const mounted = useRef(true);

  useEffect(() => {
    if (state.loading && !promiseRef.current) {
      promiseRef.current = Promise.resolve(promise());

      promiseRef.current
        .then((data) => mounted.current && setState({ loading: false, error: false, data }))
        .catch((error) => mounted.current && setState({ loading: false, error, data: null }))
        .finally(() => {
          promiseRef.current = null;
        });
    }
  }, [state.loading, mounted, setState]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  return {
    state,
    refetch: () => {
      if (!promiseRef.current) {
        setState({ loading: true, error: false, data: null });
      }
    },
  };
};

export default useRemoteData;
