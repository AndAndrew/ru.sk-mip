import styles from './Header.module.scss'
import {Nav} from "./Nav/Nav";
import {VacancyItemType} from "../Features/VacanciesPage/VacancyItem/VacancyItem";
import {contacts} from "../contacts";
import logo from "../Assets/origami.png"

type PropsType = {
    location: string
    changeLocation: (location: string) => void
    setVacancy: (vacancy: VacancyItemType) => void
}

export const Header = (props: PropsType) => {
    return (
        <div className={styles.container}>
            <div className={styles.logoBlock}>
                <div className={styles.logo}><img src={logo} width="65" height="65"/></div>
                <div className={styles.contacts}>
                    <div className={styles.contactItem}>email:
                        <a className={styles.ref} href={`mailto:${contacts.email}?subject=Добрый день!&body=Добрый день! Я заинтересовался услугами вашей компании.
                           %0D%0A%0D%0AМое имя  .
                           %0D%0A%0D%0A%0D%0A%0D%0A
                           %0D%0AСвязаться со мной можно следующими способами:
                           %0D%0AТелефон:  ,
                           %0D%0AE-mail:  `}> {contacts.email}</a>
                    </div>
                    <div className={styles.contactItem}>phone: <a className={styles.ref} href={`tel:${contacts.phone}`}>{contacts.phone}</a></div>
                </div>
            </div>
            <Nav location={props.location}
                 changeLocation={props.changeLocation}
                 setVacancy={props.setVacancy}
            />
        </div>
    );
}
