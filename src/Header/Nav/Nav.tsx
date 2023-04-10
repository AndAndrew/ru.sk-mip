import styles from './Nav.module.scss';
import {Link} from 'react-scroll';
import {useNavigate} from "react-router-dom";
import {useState} from "react";

type NavStateType = 'Main' | 'Vacancy'

export const Nav = () => {

    const navigate = useNavigate()
    const [state, setState] = useState<NavStateType>('Main')

    const vacancyHandler = () => {
        setState('Vacancy')
        navigate('/Vacancy')
    }

    const backHandler = () => {
        setState('Main')
        navigate('/')
    }

    return (
        <div className={styles.nav}>
            {state === 'Main' && <>
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
            {state === 'Vacancy' &&
                <div className={styles.item} onClick={backHandler}>Назад</div>
            }
        </div>
    )
}