import arrowUp from '../../Assets/arrowUp.svg'
import arrowDown from '../../Assets/arrowDown.svg'
import styles from './ArrowButton.module.scss'

type PropsType = {
    type: 'up' | 'down'
    onClickHandler: () => void
}

export const ArrowButton = (props: PropsType) => {
    return (
        props.type === 'up'
            ? <img className={styles.img} src={arrowUp} onClick={props.onClickHandler} alt={'по возрастанию'}/>
            : <img className={styles.img} src={arrowDown} onClick={props.onClickHandler} alt={'по убыванию'}/>
    );
};