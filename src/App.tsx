import React, {useState} from 'react';
import styles from './App.module.scss';
import {Header} from "./Header/Header";
import {Company} from "./Features/Company/Company";
import {Contacts} from "./Footer/Contacts/Contacts";
import {HashRouter, Route, Routes} from "react-router-dom";
import {VacanciesPage} from "./Features/VacanciesPage/VacanciesPage";
import {ChoiceBlock} from "./Features/ChoiceBlock/ChoiceBlock";
import {Partners} from "./Features/Partners/Partners";
import {Candidates} from "./Features/Candidates/Candidates";
import {VacancyDetails} from "./Features/VacancyDetails/VacancyDetails";
import {VacancyItemType} from "./Features/VacanciesPage/VacancyItem/VacancyItem";

function App() {

    const [location, setLocation] = useState('/')
    const [vacancy, setVacancy] = useState<VacancyItemType>({
        id: '',
        position: '',
        salary: 0,
        description: '',
        place: '',
        publicationDate: ''
    })

    const changeLocation = (location: string) => {
        setLocation(location)
    }

    return (
        <div className={styles.App}>
            <HashRouter>
                <Header location={location}
                        changeLocation={changeLocation}
                        setVacancy={setVacancy}
                />
                <Routes>
                    <Route path={'/Vacancy'} element={<VacanciesPage changeLocation={changeLocation}
                                                                     setVacancy={setVacancy}/>}/>
                    <Route path={'/VacancyDetails'} element={<VacancyDetails vacancy={vacancy} changeLocation={changeLocation}/>}/>
                    <Route path={'/Partners'} element={<Partners/>}/>
                    <Route path={'/Candidates'} element={<Candidates/>}/>
                    <Route path={'/'} element={<Main changeLocation={changeLocation}/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

type PropsType = {
    changeLocation: (location: string) => void
}
const Main = (props: PropsType) => {
    return <>
        <Company/>
        <ChoiceBlock changeLocation={props.changeLocation}/>
        <div className={styles.about}>Много много много много много много много много много много много много много
            много много много много много много много много много много много много много много много много много много
            много много много много много много много много много много много много текста о компании
        </div>
        <Contacts/>
    </>
}

export default App;


