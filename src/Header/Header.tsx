import styles from './Header.module.scss'
import {Nav} from "./Nav/Nav";
import {VacancyItemType} from "../Features/VacanciesPage/VacancyItem/VacancyItem";

type PropsType = {
    location: string
    changeLocation: (location: string) => void
    setVacancy: (vacancy: VacancyItemType) => void
}

export const Header = (props: PropsType) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}/>
            <Nav location={props.location}
                 changeLocation={props.changeLocation}
                 setVacancy={props.setVacancy}
            />
        </div>
    );
}
