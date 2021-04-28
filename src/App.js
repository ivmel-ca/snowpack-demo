import React from "react";
import ReactIcon from "./svgs/icons/react-icon.svg";

import styles from "./app.module.scss";

const App = () => (
  <div className={styles.kokoko}>
    <h3 className={styles.title}>Hello World!</h3>
    <span className={styles.rotatingIcon}>
      <ReactIcon />
    </span>
  </div>
);

export default App;
