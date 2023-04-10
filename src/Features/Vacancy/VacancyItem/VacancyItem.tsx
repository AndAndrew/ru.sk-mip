import styles from './VacancyItem.module.scss'

export const VacancyItem = () => {
    return (
        <div className={styles.item}>
            <div className={styles.itemHeader}>
                <div className={styles.position}>Должность</div>
                <div className={styles.salary}>200 000руб</div>
            </div>
            <div className={styles.description}>Много много много много много много много много много много много много текста о вакансии</div>
            <div className={styles.itemFooter}>
                <div className={styles.place}>Город</div>
                <button className={styles.responseButton}
                        onClick={() => alert('модальное окно с кнопками позвонить или отправить email')}>Откликнуться
                </button>
            </div>
        </div>
    );
};