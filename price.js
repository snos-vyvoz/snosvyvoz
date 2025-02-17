const vyvozPrice = [
    { volume: 'до 500 кг / 1 - 2 м³ <br> (до 15 мешков)', price: '95 - 100 р.' },
    { volume: 'до 1 т. / 3 - 4 м³ <br> (до 30 мешков)', price: '110 - 120 р.' },
    { volume: 'до 2 т. / 6 - 7 м³ <br> (до 60 мешков)', price: '130 - 150 р.' },
    { volume: 'до 3 т. / 10 м³ <br> (до 90 мешков)', price: '190 - 220 р.' },
    { volume: 'до 4-6 т. / 12 - 20 м³ <br> (120 - 180 мешков)', price: '270 - 320 р.' }
];

const loadersPrice = [
    { volume: 'Выезд', price: 'от 30 р.' },
    { volume: 'Мешок (ходка) на лифте', price: '70 коп.' },
    { volume: 'Мешок (ходка) пешком - 1 этаж', price: '35 коп.' },
    { volume: 'Часовые работы', price: 'от 15 р. / ч.' },
]

const demontagePrice = [
    { volume: 'Демонтаж гипсокартона', price: 'от 10 р. / м.кв.' },
    { volume: 'Демонтаж дранки', price: 'от 10 р. / м.кв.' },
    { volume: 'Снятие обоев 1 слой', price: 'от 2 р. / м.кв.' },
    { volume: 'Снятие обоев (Демонтаж последующих слоёв)', price: 'от 1 р. / м.кв.' },
    { volume: 'Снятие жидких обоев', price: 'от 3,5 р. / м.кв.' },
    { volume: 'Демонтаж штукатурки', price: 'от 6 р. / м.кв.' },
    { volume: 'Демонтаж старой краски со стен', price: 'от 10 р. / м.кв.' },
    { volume: 'Снятие шпатлевки со стен', price: 'от 10 р. / м.кв.' },
    { volume: 'Демонтаж старой масленой краски фрезером', price: 'от 10 р. / м.кв.' },
    { volume: 'Демонтаж маяков', price: '1 р. / м.кв.' },
    { volume: 'Демонтаж старой вагонки', price: 'от 8 р. / м.кв.' },
    { volume: 'Демонтаж сайдинга', price: '7 р. / м.кв.' },
    { volume: 'Демонтаж ванны чугунной (без сохранения)', price: 'от 100 р. / изделие' },
    { volume: 'Демонтаж ванны акриловой (без сохранения)', price: 'от 25 р. / м.кв.' },
    { volume: 'Демонтаж ванны стальной (без сохранения)', price: 'от 25 р. / м.кв.' },
    { volume: 'Демонтаж "экрана" под ванной', price: 'от 50 р. / м.кв.' },
    { volume: 'Демонтаж раковины', price: 'от 10 р. / м.кв.' },
    { volume: 'Демонтаж инсталляции', price: 'от 27 р. / м.кв.' },
    { volume: 'Демонтаж унитаза', price: 'от 20 р. / м.кв.' },
    { volume: 'Демонтаж полотенцесушителя', price: 'от 19 р. / м.кв.' },
    { volume: 'Демонтаж душевой кабины (с сохранением)', price: 'от 100 р. / м.кв.' },
    { volume: 'Демонтаж душевой кабины (без сохранения)', price: 'от 30 р. / м.кв.' },
    { volume: 'Демонтаж деревянного пола', price: 'от 6,5 р. / м.кв.' },
    { volume: 'Демонтаж пола из ДСП, ЦСП, OSB, фанеры, ДВП (без сохранения)', price: 'от 6,7 р. / м.кв.' },
    { volume: 'Демонтаж плинтуса ПВХ, деревянного', price: 'от 3 р. / м.кв.' },
    { volume: 'Демонтаж ламината, паркета', price: 'от 4,5 р. / м.кв.' },
    { volume: 'Демонтаж паркета щитового с лагами', price: 'от 5 р. / м.кв.' },
    { volume: 'Демонтаж деревянных дощатых полов с лагами', price: 'от 7 р. / м.кв.' },
    { volume: 'Демонтаж люстры', price: 'от 7 р. / шт.' },
    { volume: 'Демонтаж светильника', price: 'от 5 р. / шт.' },
    { volume: 'Демонтаж автомата', price: 'от 4 р. / шт.' },
    { volume: 'Демонтаж розетки', price: 'от 3 р. / шт.' },
    { volume: 'Демонтаж выключателя', price: 'от 3 р. / шт.' },
    { volume: 'Демонтаж электрощита', price: 'от 10 р. / шт.' },
    { volume: 'Демонтаж скрытой проводки', price: 'от 3 р. / м.п.' },
    { volume: 'Демонтаж открытой проводки', price: 'от 1 р. / м.п.' },
    { volume: 'Демонтаж кирпичных стен (1/4 кирпича)', price: 'от 11 р. / м.кв.' },
    { volume: 'Демонтаж кирпичных стен (1/2 кирпича)', price: 'от 11 р. / м.кв.' },
    { volume: 'Демонтаж кирпичных стен (1 кирпич)', price: 'от 11 р. / м.кв.' },
    { volume: 'Демонтаж кирпичных стен (1,5 кирпича)', price: 'от 12 р. / м.кв.' },
    { volume: 'Демонтаж кирпичных стен (2 кирпича)', price: 'от 16 р. / м.кв.' },
    { volume: 'Демонтаж стен из ГКЛ', price: 'от 8 р. / м.кв.' },
    { volume: 'Демонтаж стен из газосиликатного блока', price: 'от 15 р. / м.кв.' }
];


const transportPrice = [
    { volume: 'В черте города', price: '30 р. / 2 часа' },
    { volume: 'За пределы МКАД', price: 'от 2 р. / км' },
]
