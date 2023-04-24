import styles from './Nav.module.scss';
import {Link} from 'react-scroll';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

type PropsType = {
    location: string
    changeLocation: (location: string) => void
}

export const Nav = (props: PropsType) => {

    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        props.changeLocation(location.pathname)
    })

    const vacancyHandler = () => {
        // setState('/Vacancy')
        props.changeLocation('/Vacancy')
        navigate('/Vacancy')
    }

    const backHandler = () => {
        // setState('/')
        props.changeLocation('/')
        navigate('/')
    }

    return (
        <div className={styles.nav}>
            {props.location === '/' ? <>
                    {/*<Link*/}
                    {/*    className={styles.item}*/}
                    {/*    to="Company"*/}
                    {/*    spy={true}*/}
                    {/*    smooth={true}*/}
                    {/*    duration={350}*/}
                    {/*>Наша компания</Link>*/}
                    {/*<Link*/}
                    {/*    className={styles.item}*/}
                    {/*    to="Partners"*/}
                    {/*    spy={true}*/}
                    {/*    smooth={true}*/}
                    {/*    duration={350}*/}
                    {/*>Партнерам</Link>*/}
                    {/*<Link*/}
                    {/*    className={styles.item}*/}
                    {/*    to="Candidates"*/}
                    {/*    spy={true}*/}
                    {/*    smooth={true}*/}
                    {/*    duration={350}*/}
                    {/*>Соискателям</Link>*/}
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
                : <div className={styles.item} onClick={backHandler}>Назад</div>
            }
        </div>
    )
}