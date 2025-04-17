import { IEvent, ITheme } from "./types";

export const THEMES_HOSTORY: ITheme[] = [
  { id: 1, title: "Технологии", yearFrom: 1983, yearTo: 1986 },
  { id: 2, title: "Кино", yearFrom: 1987, yearTo: 1991 },
  { id: 3, title: "Литература", yearFrom: 1992, yearTo: 1997 },
  { id: 4, title: "Исскуство", yearFrom: 1999, yearTo: 2004 },
  { id: 5, title: "Спорт", yearFrom: 2006, yearTo: 2013 },
  { id: 6, title: "Наука", yearFrom: 2015, yearTo: 2022 },
]

export const EVENTS_HOSTORY: IEvent[] = [
  { id: 1, theme: 1, year: 1983, content: "Первый мобильный телефон Motorola DynaTAC 8000X поступил в продажу" },
  { id: 2, theme: 1, year: 1984, content: "Apple представляет Macintosh — первый массовый компьютер с графическим интерфейсом" },
  { id: 3, theme: 1, year: 1985, content: "Microsoft выпускает Windows 1.0 — первую версию своей операционной системы" },
  { id: 4, theme: 1, year: 1986, content: `Катастрофа космического шаттла "Челленджер"` },
  
  { id: 6, theme: 2, year: 1987, content: "«Хищник»/Predator, США (реж. Джон Мактирнан)" },
  { id: 7, theme: 2, year: 1988, content: "«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)" },
  { id: 8, theme: 2, year: 1989, content: "«Назад в будущее 2»/Back to the Future Part II, США (реж. Роберт Земекис)" },
  { id: 9, theme: 2, year: 1990, content: "«Крепкий орешек 2»/Die Hard 2, США (реж. Ренни Харлин)" },
  { id: 10, theme: 2, year: 1991, content: "«Терминатор 2: Судный день»/Terminator 2: Judgment Day, США (реж. Джеймс Кэмерон)" },

  { id: 10, theme: 3, year: 1992, content: "Нобелевская премия по литературе — Дерек Уолкотт" },
  { id: 11, theme: 3, year: 1993, content: "Тони Моррисон получает Нобелевскую премию по литературе" },
  { id: 12, theme: 3, year: 1994, content: "Выход романа Стивена Кинга «Бессонница»" },
  { id: 13, theme: 3, year: 1995, content: "Нобелевская премия по литературе — Шеймас Хини" },
  { id: 14, theme: 3, year: 1996, content: "Публикация романа «Случайная вакансия» Дж. К. Роулинг" },
  { id: 15, theme: 3, year: 1997, content: "«Гарри Поттер и философский камень» — первая книга Дж. К. Роулинг" },

  { id: 16, theme: 4, year: 1999, content: "Премьера балета «Золушка» в постановке Жан-Кристофа Майо" },
  { id: 17, theme: 4, year: 2000, content: "Возобновление издания журнала «Театр»" },
  { id: 18, theme: 4, year: 2001, content: "Открытие музея Гуггенхайма в Бильбао" },
  { id: 19, theme: 4, year: 2002, content: "Премьера трилогии Тома Стоппарда «Берег Утопии»" },
  { id: 20, theme: 4, year: 2003, content: "Пожар в театре «Ла Фениче» (Венеция)" },
  { id: 21, theme: 4, year: 2004, content: "Открытие Оперного театра в Копенгагене" },

  { id: 22, theme: 5, year: 2006, content: "Италия выигрывает Чемпионат мира по футболу" },
  { id: 23, theme: 5, year: 2007, content: "Роджер Федерер выигрывает Уимблдон в пятый раз подряд" },
  { id: 24, theme: 5, year: 2008, content: "Пекин принимает Летние Олимпийские игры" },
  { id: 25, theme: 5, year: 2009, content: "Усэйн Болт устанавливает мировой рекорд в беге на 100 м (9.58 сек)" },
  { id: 26, theme: 5, year: 2010, content: "Испания побеждает на Чемпионате мира по футболу" },
  { id: 27, theme: 5, year: 2011, content: "Япония выигрывает женский Чемпионат мира по футболу" },
  { id: 28, theme: 5, year: 2012, content: "Лондон принимает Летние Олимпийские игры" },
  { id: 29, theme: 5, year: 2013, content: "Бавария выигрывает Лигу чемпионов УЕФА" },

  { id: 30, theme: 6, year: 2015, content: "Частное солнечное затмение, видимое в Южной Африке" },
  { id: 31, theme: 6, year: 2016, content: "Телескоп «Хаббл» обнаружил галактику GN-z11" },
  { id: 32, theme: 6, year: 2017, content: "Tesla представляет первый электрический грузовик" },
  { id: 33, theme: 6, year: 2018, content: "Запуск космического телескопа TESS" },
  { id: 34, theme: 6, year: 2019, content: "Первое изображение чёрной дыры" },
  { id: 35, theme: 6, year: 2020, content: "Разработка вакцин против COVID-19" },
  { id: 36, theme: 6, year: 2021, content: "Первый полёт вертолёта Ingenuity на Марсе" },
  { id: 37, theme: 6, year: 2022, content: "Запуск космического телескопа Джеймса Уэбба" },
]