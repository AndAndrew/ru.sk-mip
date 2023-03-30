import styles from './Partners.module.scss'
import {PartnersForm} from "./PartnersForm/PartnersForm";

export const Partners = () => {

    return (
        <div id={'Partners'} className={styles.partners}>
            <h2>Партнерам</h2>
            <div>информация для партнеров</div>
            <PartnersForm/>
        </div>
    );
}
