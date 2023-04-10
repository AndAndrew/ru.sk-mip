import React from 'react';
import styles from './App.module.scss';
import {Header} from "./Header/Header";
import {Company} from "./Features/Company/Company";
import {Partners} from "./Features/Partners/Partners";
import {Candidates} from "./Features/Candidates/Candidates";
import {Contacts} from "./Footer/Contacts/Contacts";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Vacancy} from "./Features/Vacancy/Vacancy";

function App() {
    return (
        <div className={styles.App}>
            <HashRouter>
                <Header/>
                <Routes>
                    <Route path={'/Vacancy'} element={<Vacancy/>}/>
                    <Route path={'/'} element={<Main/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

const Main = () => {
    return <>
        <Company/>
        <Partners/>
        <Candidates/>
        <Contacts/>
    </>
}

export default App;


