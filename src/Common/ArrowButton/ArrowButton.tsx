import styles from './ArrowButton.module.scss'

type PropsType = {
    type: 'up' | 'down'
    onClickHandler: () => void
}

export const ArrowButton = (props: PropsType) => {
    return (
        props.type === 'up'
            ?
            <svg className={styles.img}
                 onClick={props.onClickHandler}
                 width="512"
                 height="512"
                 viewBox="0 0 512 512"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path className=""
                      d="M419.5 337.5L256.5 174.5L93.5 337.5"
                      stroke="black"
                      strokeWidth="24"
                      strokeLinecap="round"/>
            </svg>
            :
            <svg className={styles.img}
                 onClick={props.onClickHandler}
                 width="512"
                 height="512"
                 viewBox="0 0 512 512"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M93.5 174.5L256.5 337.5L419.5 174.5"
                      stroke="black"
                      strokeWidth="24"
                      strokeLinecap="round"/>
            </svg>
    );
};