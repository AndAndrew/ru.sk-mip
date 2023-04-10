import styles from './Vacancy.module.scss'
import {VacancyItem} from "./VacancyItem/VacancyItem";
export const Vacancy = () => {
    return <div className={styles.container}>
        <div>Какую работу Вы ищите?</div>
        <input/>
        <input/>
        <button>Показать</button>
        <div>Сортировать по</div>
        <VacancyItem/>
    </div>
};