import styles from './VacancyDetails.module.scss'
import {VacancyItemType} from "../VacanciesPage/VacancyItem/VacancyItem";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

type PropsType = {
    vacancy: VacancyItemType
    changeLocation: (location: string) => void
}

export const VacancyDetails = (props: PropsType) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

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
                    <div className={styles.salary}>
                        {props.vacancy.minSalary
                            ? <><div className={styles.salaryValue}>oт {props.vacancy.minSalary}</div>
                                <div className={styles.salaryValue}>до {props.vacancy.salary} р.</div></>
                            : <div className={styles.salaryValue}>{props.vacancy.salary} р.</div>}
                    </div>
                </div>
                <div className={styles.description}>{props.vacancy.description}</div>
                <div className={styles.title}>Требования:</div>
                <div className={styles.requirements}>{props.vacancy.requirements}</div>
                <div className={styles.title}>Условия:</div>
                {props.vacancy.conditions.map((cond, index) => <div className={styles.condition} key={index}>- {cond}</div>)}
                <div className={styles.itemFooter}>
                    <div className={styles.place}>{props.vacancy.place}</div>
                    <div className={styles.responseButton}
                            onClick={buttonHandler}>Откликнуться
                    </div>
                </div>
            </div>
        </div>
    );
};