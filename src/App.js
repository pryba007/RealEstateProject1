import React from'react';
import styles from "./App.module.css";
import catImage from "./images/kitty-cat-kitten-pet-45201.jpeg";

const App = () => {
    return (
        <div className={styles.app}>
            <h1>Project 1</h1>
            <p>This is the first project</p>
            <img src={catImage} className={styles.image} alt="cat" />
        </div>
    );
};                                                              

export default App;