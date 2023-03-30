import React from 'react';
import styles from './App.module.scss';
import {Header} from "./Header/Header";
import {Company} from "./Features/Company/Company";
import {Partners} from "./Features/Partners/Partners";
import {Candidates} from "./Features/Candidates/Candidates";
import {Contacts} from "./Footer/Contacts/Contacts";

function App() {
  return (
    <div className={styles.App}>
        <Header/>
        <Company/>
        <Partners/>
        <Candidates/>
        <Contacts/>
    </div>
  );
}

export default App;
