import styles from './VacanciesPage.module.scss'
import {VacancyItem} from "./VacancyItem/VacancyItem";
import {vacancies} from "../../Vacancies";
import {ChangeEvent, useEffect, useState} from "react";

export const VacanciesPage = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    })
    const [currentVacancies, setCurrentVacancies] = useState(vacancies)

    const positionInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentVacancies(vacancies.filter(vacancy =>
            vacancy.position === event.currentTarget.value))
        if (event.currentTarget.value === '') {
            setCurrentVacancies(vacancies)
        }
    }
    const placeInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentVacancies(vacancies.filter(vacancy =>
            vacancy.place === event.currentTarget.value))
        if (event.currentTarget.value === '') {
            setCurrentVacancies(vacancies)
        }
    }
    const salaryInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentVacancies(vacancies.filter(vacancy =>
            vacancy.salary >= Number(event.currentTarget.value)))
        if (event.currentTarget.value === '') {
            setCurrentVacancies(vacancies)
        }
    }

    return <div className={styles.container}>
        <div className={styles.block}>
            {/*<div>Какую работу Вы ищите?</div>*/}
            {/*<input/>*/}
            {/*<input/>*/}
            {/*<button>Показать</button>*/}
            <div className={styles.sortBlock}>
                <div>Сортировать по:</div>
                <input className={styles.sortInput}
                       placeholder='Должность'
                       onChange={positionInputChangeHandler}>
                </input>
                <input className={styles.sortInput}
                       placeholder='Город'
                       onChange={placeInputChangeHandler}>
                </input>
                <input className={styles.sortInput}
                       placeholder='Зарплата от'
                       type={"number"}
                       onChange={salaryInputChangeHandler}>
                </input>
            </div>
        </div>
        <div className={styles.vacancies}>
            {currentVacancies.map(vacancy =>
                <VacancyItem position={vacancy.position}
                             salary={`${vacancy.salary}`}
                             description={vacancy.description}
                             place={vacancy.place}
                />)}
        </div>
    </div>
};