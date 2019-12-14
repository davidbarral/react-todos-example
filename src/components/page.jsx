import React from "react";
import styles from "./page.module.css";

const Page = ({ children }) => <div className={styles.Page}>{children}</div>;

export default Page;
