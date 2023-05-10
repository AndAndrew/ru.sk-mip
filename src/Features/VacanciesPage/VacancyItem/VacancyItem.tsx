import styles from './VacancyItem.module.scss'
import {useNavigate} from "react-router-dom";

export type VacancyItemType = {
    id: string,
    position: string,
    salary: number,
    description: string,
    requirements: string,
    conditions: Array<string>,
    place: string,
    publicationDate: string
}

type PropsType = {
    vacancy: VacancyItemType,
    changeLocation: (location: string) => void,
    setVacancy: (vacancy: VacancyItemType) => void
}

export const VacancyItem = (props: PropsType) => {

    const vacancy = {...props.vacancy}
    const navigate = useNavigate()

    const clickHandler = () => {
        props.changeLocation('/VacancyDetails')
        props.setVacancy(vacancy)
        navigate('/VacancyDetails')
    }

    const buttonHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        props.changeLocation('/Candidates')
        navigate('/Candidates')
        event.stopPropagation()
    }

    return (
        <div className={styles.item} onClick={clickHandler}>
            <div className={styles.itemHeader}>
                <div className={styles.position}>{vacancy.position}</div>
                <div className={styles.salary}>до {vacancy.salary} р.</div>
            </div>
            <div className={styles.description}>{vacancy.description}</div>
            <div className={styles.title}>Требования:</div>
            <div className={styles.requirements}>{vacancy.requirements}</div>
            <div className={styles.itemFooter}>
                <div className={styles.place}>{vacancy.place}</div>
                <div className={styles.responseButton}
                     onClick={(event) => buttonHandler(event)}>Откликнуться
                </div>
            </div>
        </div>
    );
};