import styles from './Nav.module.scss';
import {Link} from 'react-scroll';
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

export const Nav = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [state, setState] = useState(location.pathname)

    const vacancyHandler = () => {
        setState('/Vacancy')
        navigate('/Vacancy')
    }

    const backHandler = () => {
        setState('/')
        navigate('/')
    }

    return (
        <div className={styles.nav}>
            {state === '/' && <>
                <Link
                    className={styles.item}
                    to="Company"
                    spy={true}
                    smooth={true}
                    duration={350}
                >Наша компания</Link>
                <Link
                    className={styles.item}
                    to="Partners"
                    spy={true}
                    smooth={true}
                    duration={350}
                >Партнерам</Link>
                <Link
                    className={styles.item}
                    to="Candidates"
                    spy={true}
                    smooth={true}
                    duration={350}
                >Соискателям</Link>
                <div className={styles.item}
                     onClick={vacancyHandler}>
                    Вакансии
                </div>
                <Link
                    className={styles.item}
                    to="Contacts"
                    spy={true}
                    smooth={true}
                    duration={350}
                >Связаться с нами</Link>
            </>
            }
            {state === '/Vacancy' &&
                <div className={styles.item} onClick={backHandler}>Назад</div>
            }
        </div>
    )
}