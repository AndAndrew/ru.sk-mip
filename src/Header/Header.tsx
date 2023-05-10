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
                    <div className={styles.contactItem}>email:
                        <a className={styles.ref} href={`mailto:info@skmip.ru?subject=Добрый день!&body=Добрый день! Я заинтересовался услугами вашей компании.
                           %0D%0A%0D%0AМое имя  .
                           %0D%0A%0D%0A%0D%0A%0D%0A
                           %0D%0AСвязаться со мной можно следующими способами:
                           %0D%0AТелефон:  ,
                           %0D%0AE-mail:  `}> info@skmip.ru</a>
                    </div>
                    <div className={styles.contactItem}>phone: <a className={styles.ref} href={'tel:+79377990856'}>+7
                        (937)7990856</a></div>
                </div>
            </div>
            <Nav location={props.location}
                 changeLocation={props.changeLocation}
                 setVacancy={props.setVacancy}
            />
        </div>
    );
}
