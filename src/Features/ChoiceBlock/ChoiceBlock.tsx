import styles from './ChoiceBlock.module.scss'
import {useNavigate} from "react-router-dom";

type PropsType = {
    changeLocation: (location: string) => void
}

export const ChoiceBlock = (props: PropsType) => {

    const navigate = useNavigate()

    const partnersHandler = () => {
        props.changeLocation('/Partners')
        navigate('/Partners')
    }

    const candidatesHandler = () => {
        props.changeLocation('/Vacancy')
        navigate('/Vacancy')
    }

    return (
        <div className={styles.choiceBlock}>
            <div className={styles.button}
            onClick={partnersHandler}>
                <span className={styles.buttonTitle}>Компаниям</span>
                <span>найти сотрудников</span>
            </div>
            <div className={styles.button}
            onClick={candidatesHandler}>
                <span className={styles.buttonTitle}>Соискателям</span>
                <span>найти работу</span>
            </div>
        </div>
    );
};