import React, {useState} from 'react';
import styles from './App.module.scss';
import {Header} from "./Header/Header";
import {Company} from "./Features/Company/Company";
import {Contacts} from "./Footer/Contacts/Contacts";
import {HashRouter, Route, Routes} from "react-router-dom";
import {VacanciesPage} from "./Features/VacanciesPage/VacanciesPage";
import {ChoiceBlock} from "./Features/ChoiceBlock/ChoiceBlock";
import {Partners} from "./Features/Partners/Partners";
import {Candidates} from "./Features/Candidates/Candidates";
import {VacancyDetails} from "./Features/VacancyDetails/VacancyDetails";
import {VacancyItemType} from "./Features/VacanciesPage/VacancyItem/VacancyItem";

function App() {

    const [location, setLocation] = useState('/')
    const [vacancy, setVacancy] = useState<VacancyItemType>({
        id: '',
        position: '',
        salary: 0,
        description: '',
        requirements: '',
        conditions: [],
        place: '',
        publicationDate: ''
    })

    const changeLocation = (location: string) => {
        setLocation(location)
    }

    return (
        <div className={styles.App}>
            <HashRouter>
                <Header location={location}
                        changeLocation={changeLocation}
                        setVacancy={setVacancy}
                />
                <Routes>
                    <Route path={'/Vacancy'} element={<VacanciesPage changeLocation={changeLocation}
                                                                     setVacancy={setVacancy}/>}/>
                    <Route path={'/VacancyDetails'}
                           element={<VacancyDetails vacancy={vacancy} changeLocation={changeLocation}/>}/>
                    <Route path={'/Partners'} element={<Partners/>}/>
                    <Route path={'/Candidates'} element={<Candidates/>}/>
                    <Route path={'/'} element={<Main changeLocation={changeLocation}/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

type PropsType = {
    changeLocation: (location: string) => void
}
const Main = (props: PropsType) => {
    return <>
        <Company/>
        <ChoiceBlock changeLocation={props.changeLocation}/>
        <div id='About' className={styles.about}>
            <div className={styles.block}>
                Наша компания предлагает оптимальное решение вопросов, связанных с подбором персонала на вашем
                производстве. ООО "СК МИП" силами своих сотрудников выполнит производственные задачи Вашей компании и
                избавит Вас от расходов по поиску персонала.
            </div>
            <div className={styles.block}>
                Контроль работы нашего персонала на производстве осуществляет мастер - представитель нашей компании,
                также уполномоченный решать возникшие вопросы в ходе работы.
            </div>
            <div className={styles.block}>
                После окончания работ, наша компания выведет свой персонал в удобное для Заказчика время. Оплата
                производится лишь за фактически отработанное время. Состав предоставляемого персонала формируется
                непосредственно по Вашей заявке и предоставляется в кратчайшие сроки.
            </div>
            <h3>Наши преимущества:</h3>
            <div className={styles.item}>
                - Качественный и быстрый подбор работников,
                вплоть до узкоспециализированных сотрудников. Формирование полноценных бригад;
            </div>
            <div className={styles.item}>
                - Предприятие-заказчик получает возможность отнести расходы по персоналу на другие статьи расходов;
            </div>
            <div className={styles.item}>
                - Вы экономите деньги на рекламных кампаниях;
            </div>
            <div className={styles.item}>
                - Возмещение по налогу на добавленную стоимость;
            </div>
            <div className={styles.item}>
                - Снижение нагрузки на кадровую, юридическую и бухгалтерскую службы предприятия-заказчика;
            </div>
            <div className={styles.item}>
                - Вы не несете материальных затрат на обучение и переподготовку персонала, а так же затрат на социальные
                выплаты;
            </div>
            <div className={styles.item}>
                - Отсутствие необходимости оформления в штат сотрудников на время их испытательного срока, что позволяет
                оценить потенциал сотрудника без принятия на себя обязательств;
            </div>
        </div>
        <Contacts/>
    </>
}

export default App;


