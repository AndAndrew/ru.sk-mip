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
            <div className={styles.logoBlock}>
                <div className={styles.logo}/>
                <div className={styles.contacts}>
                    <div className={styles.contactItem}>email: __________</div>
                    <div className={styles.contactItem}>phone: <a className={styles.ref} href={'tel:+79377990856'}>+7 (937)7990856</a></div>
                </div>
            </div>
            <Nav location={props.location}
                 changeLocation={props.changeLocation}
                 setVacancy={props.setVacancy}
            />
        </div>
    );
}
