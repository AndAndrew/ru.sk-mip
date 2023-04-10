import styles from './VacancyItem.module.scss'

type VacancyItemPropsType = {
    position: string,
    salary: string,
    description: string,
    place: string
}

export const VacancyItem = (props: VacancyItemPropsType) => {

    const vacancy = {...props}

    return (
        <div className={styles.item}>
            <div className={styles.itemHeader}>
                <div className={styles.position}>{vacancy.position}</div>
                <div className={styles.salary}>{vacancy.salary}</div>
            </div>
            <div className={styles.description}>{vacancy.description}</div>
            <div className={styles.itemFooter}>
                <div className={styles.place}>{vacancy.place}</div>
                <button className={styles.responseButton}
                        onClick={() => alert('модальное окно с кнопками позвонить или отправить email')}>Откликнуться
                </button>
            </div>
        </div>
    );
};