import {VacancyItemType} from "./Features/VacanciesPage/VacancyItem/VacancyItem";

export const vacancies: Array<VacancyItemType> = [
    {
        id: '1',
        position: 'Токарь универсал',
        salary: 75000,
        description: 'Токарная обработка деталей на токарно-винторезном станке 16К25, МК6131. (Протачивать и растачивать в люнете трубчатую заготовку диаметром 140 мм по 10 квалитету точности.)',
        requirements: 'Опыт работы токарем на универсальных токарных станках.',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Сменный график работы (2/2)',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
            'Иногородним предоставляется проживание (или компенсация) и компенсация проезда'
        ],
        place: 'Воронеж',
        publicationDate: '10.05.2022'
    },
    {
        id: '2',
        position: 'Маляр',
        salary: 65000,
        description: 'Окраска металлоконструкций и деталей, краскопультом, жидкими красками.',
        requirements: 'Опыт работы маляром по металлу.',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Сменный график работы (2/2)',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
            'Иногородним предоставляется проживание (или компенсация) и компенсация проезда'
        ],
        place: 'Воронеж',
        publicationDate: '10.05.2022'
    },
    {
        id: '3',
        position: 'Подсобный рабочий',
        salary: 45000,
        description: 'Завешивать детали на конвейерную линию.',
        requirements: 'Опыт работы на производстве.',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Сменный график работы (2/2)',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
        ],
        place: 'Воронеж',
        publicationDate: '10.05.2022'
    },
    {
        id: '4',
        position: 'Чистильщик металла',
        salary: 65000,
        description: 'Работы по дробеочистке и мойке деталей в камере.',
        requirements: 'Опыт работы по очистке металла (дробеструйщик).',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Сменный график работы (2/2)',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
        ],
        place: 'Воронеж',
        publicationDate: '10.05.2022'
    },
    {
        id: '5',
        position: 'Грузчик наборщик',
        salary: 45000,
        description: 'Погрузо-разгрузочные работы. Сборка по накладным.',
        requirements: 'Опыт работы на складах, с рохлей.',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Сменный график работы (2/2)',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
            'Иногородним предоставляется проживание (или компенсация) и компенсация проезда'
        ],
        place: 'Воронеж',
        publicationDate: '10.05.2022'
    },
    {
        id: '6',
        position: 'Токарь расточник',
        salary: 95000,
        description: 'Обработка деталей средней сложности на универсальных и координатно-расточных станках.',
        requirements: 'Опыт работы токарем расточником.',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
            'Иногородним предоставляется проживание (или компенсация) и компенсация проезда'
        ],
        place: 'Самара',
        publicationDate: '10.05.2022'
    },
    {
        id: '7',
        position: 'Сверловщик',
        salary: 57000,
        description: 'Нарезка отверстий разного типа, обработка пазов, уступов, наклонных, горизонтальных и вертикальных поверхностей деталей.',
        requirements: 'Опыт работы на сверлильных станках.',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
            'Иногородним предоставляется проживание (или компенсация) и компенсация проезда'
        ],
        place: 'Самара',
        publicationDate: '10.05.2022'
    },
    {
        id: '8',
        position: 'Штамповщик',
        minSalary: 47000,
        salary: 54000,
        description: 'Зарплата зависит от разряда. Выполнять операции гибка, калибровка, чеканка, на штампах от 250 до 1,5 тонн.',
        requirements: 'Опыт работы на штампах.',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
            'Иногородним предоставляется проживание (или компенсация) и компенсация проезда'
        ],
        place: 'Самара',
        publicationDate: '10.05.2022'
    },
    {
        id: '9',
        position: 'Фрезеровщик',
        minSalary: 55000,
        salary: 135000,
        description: 'Зарплата зависит от разряда. Шлифование и фрезерование деталей.',
        requirements: 'Опыт работы фрезеровщиком. Умение работать на вертикально-фрезерном и горизонтально-фрезерном станках, на плоскошлифовальных станках.',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
            'Иногородним предоставляется проживание (или компенсация) и компенсация проезда'
        ],
        place: 'Самара',
        publicationDate: '10.05.2022'
    },
    {
        id: '10',
        position: 'Электроэрозионист',
        salary: 89000,
        description: 'Электроэрозионная обработка поверхностей, полостей, отверстий и пазов в деталях с выверкой и установкой обрабатываемых деталей.',
        requirements: 'Опыт работы электроэрозионистом.',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
            'Иногородним предоставляется проживание (или компенсация) и компенсация проезда'
        ],
        place: 'Самара',
        publicationDate: '10.05.2022'
    },
    {
        id: '11',
        position: 'Токарь универсал',
        salary: 88000,
        description: 'Токарная обработка деталей. Проверка на точность токарных станков различной конструкции, универсальных и специальных приспособлений.',
        requirements: 'Опыт работы токарем на универсально токарных станках.',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
            'Иногородним предоставляется проживание (или компенсация) и компенсация проезда'
        ],
        place: 'Самара',
        publicationDate: '10.05.2022'
    },
    {
        id: '12',
        position: 'Слесарь инструментальщик',
        salary: 78000,
        description: 'Изготовление и ремонт точных и сложных инструментов и приспособлений; Слесарная обработка и доводка термически не обработанных деталей.',
        requirements: 'Опыт работы слесарем инструментальщиком.',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
            'Иногородним предоставляется проживание (или компенсация) и компенсация проезда'
        ],
        place: 'Самара',
        publicationDate: '10.05.2022'
    },
    {
        id: '13',
        position: 'Шлифовщик',
        minSalary: 67000,
        salary: 119000,
        description: 'Зарплата зависит от разряда. Шлифование наружных цилиндрических поверхностей заготовок, плоских поверхностей заготовок, простых деталей и прутков.',
        requirements: 'Опыт работы шлифовщиком.',
        conditions: [
            'Официальное оформление по ТК РФ',
            'Стабильные выплаты, 2 раза в месяц, без задержек',
            'Почасовая оплата труда',
            'Доставка на смену и со смены корпоративным транспортом',
            'Спецодежда, медкомиссия за счет организации',
            'Иногородним предоставляется проживание (или компенсация) и компенсация проезда'
        ],
        place: 'Самара',
        publicationDate: '10.05.2022'
    },
]