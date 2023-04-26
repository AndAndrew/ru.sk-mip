import styles from './VacancyDetails.module.scss'
import {VacancyItemType} from "../VacanciesPage/VacancyItem/VacancyItem";
import {useNavigate} from "react-router-dom";

type PropsType = {
    vacancy: VacancyItemType
    changeLocation: (location: string) => void
}

export const VacancyDetails = (props: PropsType) => {

    const navigate = useNavigate()
    const buttonHandler = () => {
        props.changeLocation('/Candidates')
        navigate('/Candidates')
    }

    return (
        props.vacancy && <div className={styles.container}>
            <div className={styles.vacancyBlock}>
                <div className={styles.itemHeader}>
                    <div className={styles.position}>{props.vacancy.position}</div>
                    <div className={styles.salary}>{props.vacancy.salary}</div>
                </div>
                <div className={styles.description}>условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия условия </div>
                <div className={styles.description}>{props.vacancy.description}</div>
                <div className={styles.itemFooter}>
                    <div className={styles.place}>{props.vacancy.place}</div>
                    <button className={styles.responseButton}
                            onClick={buttonHandler}>Откликнуться
                    </button>
                </div>
            </div>
        </div>
    );
};