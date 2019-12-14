import React from "react";
import styles from "./page.module.css";
import withTitle from "../hocs/with-title";

const Page = ({ children }) => <div className={styles.Page}>{children}</div>;

export default withTitle(Page);
