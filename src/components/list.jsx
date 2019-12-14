import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./list.module.css";

const List = ({ data, fallback = <p>No data</p>, children }) =>
  data.length === 0 ? (
    cloneElement(fallback, { className: cn(styles.NoData, fallback.props.className) })
  ) : (
    <ul className={styles.List}>
      {data.map((item, i) => (
        <li className={styles.ListItem} key={i}>
          {children(item)}
        </li>
      ))}
    </ul>
  );

List.propTypes = {
  data: PropTypes.array,
  fallback: PropTypes.element,
};

export default List;
