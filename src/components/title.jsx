import React from "react";
import PropTypes from "prop-types";

const Title = ({ text = "I'm a title" }) => <h1>{text}</h1>;

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
