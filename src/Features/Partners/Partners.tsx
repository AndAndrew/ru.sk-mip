import styles from './Partners.module.scss'
import {PartnersForm} from "./PartnersForm/PartnersForm";
import {useEffect} from "react";

export const Partners = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div id={'Partners'} className={styles.partners}>
            <h2>Помогаем решить проблему с нехваткой кадров</h2>
            <div>Если Вы хотите, чтобы мы Вам перезвонили, оставьте, пожалуйста, свои контакты. Мы будем рады сотрудничеству!</div>
            <PartnersForm/>
        </div>
    );
}
