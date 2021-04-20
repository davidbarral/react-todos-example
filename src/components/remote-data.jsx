import useRemoteData from "../hooks/use-remote-data";
import PropTypes from "prop-types";

const RemoteData = ({ promise, children }) => children(useRemoteData(promise));

RemoteData.propTypes = {
  promise: PropTypes.func.isRequired,
};

export default RemoteData;
