import React from "react";
import styles from "./App.module.css";
import PromoSlideShow from "./components/PromoSlideShow";
import NavbarComponent from "./components/NavbarComponent";

const App = () => {
  return (
    <div className={styles.app}>
      <NavbarComponent />
      <h1 className={styles.position}>Hot Picks</h1>
      <PromoSlideShow className={styles.app} />
    </div>
  );
};

export default App;
