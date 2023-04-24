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
                <h3>Компаниям</h3>
                <span>найти сотрудников</span>
            </div>
            <div className={styles.button}
            onClick={candidatesHandler}>
                <h3>Соискателям</h3>
                <span>найти работу</span>
            </div>
        </div>
    );
};