import styles from './Nav.module.scss';
import {Link} from 'react-scroll';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {VacancyItemType} from "../../Features/VacanciesPage/VacancyItem/VacancyItem";

type PropsType = {
    location: string
    changeLocation: (location: string) => void
    setVacancy: (vacancy: VacancyItemType) => void
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
        window.scrollTo(0, 0)
        if (props.location === '/VacancyDetails') {
            props.setVacancy({
                id: '',
                position: '',
                salary: 0,
                description: '',
                requirements: '',
                conditions: [],
                place: '',
                publicationDate: ''
            })
            props.changeLocation('/Vacancy')
            navigate('/Vacancy')
        } else if (props.location === '/Candidates') {
            props.changeLocation('/Vacancy')
            navigate('/Vacancy')
        } else {
            props.changeLocation('/')
            navigate('/')
        }
    }

    return (
        <div className={styles.nav}>
            {props.location === '/' ? <>
                    <Link className={styles.item}
                          to='Services'
                          spy={true}
                          smooth={true}
                          duration={350}
                    >Наши услуги</Link>
                    <div className={styles.item}
                         onClick={vacancyHandler}>
                        Вакансии
                    </div>
                    <Link className={styles.item}
                          to='About'
                          spy={true}
                          smooth={true}
                          duration={350}
                    >О компании</Link>
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