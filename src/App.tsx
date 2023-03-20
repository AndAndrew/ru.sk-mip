import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Company} from "./Company/Company";
import {Partners} from "./Partners/Partners";
import {Candidates} from "./Candidates/Candidates";
import {Contacts} from "./Contacts/Contacts";

function App() {
  return (
    <div className="App">
        <Header/>
        <Company/>
        <Partners/>
        <Candidates/>
        <Contacts/>
    </div>
  );
}

export default App;
