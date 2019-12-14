import React from "react";
import styles from "./content.module.css";

const Content = ({ children }) => <main className={styles.Content}>{children}</main>;

export default Content;
