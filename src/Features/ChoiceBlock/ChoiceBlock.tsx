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
        <div id={'Services'} className={styles.choiceBlock}>
            <div className={styles.partnersButton}
            onClick={partnersHandler}>
                <span className={styles.partnersButtonTitle}>Компаниям</span>
                <span>найти сотрудников</span>
            </div>
            <div className={styles.candidatesButton}
            onClick={candidatesHandler}>
                <span className={styles.candidatesButtonTitle}>Соискателям</span>
                <span>найти работу</span>
            </div>
        </div>
    );
};