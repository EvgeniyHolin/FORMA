interface NavigationItem {
  title: string,
  link: string,
  ariaInfo: string
};

const navigationListItems: NavigationItem[] = [
  {
    title: 'Главная',
    link: '#',
    ariaInfo: 'Перейти в раздел Главная'
  },
  {
    title: 'Проекты',
    link: '#interiors',
    ariaInfo: 'Перейти в раздел Проекты'
  },
  {
    title: 'Галерея работ',
    link: '#gallery',
    ariaInfo: 'Перейти в раздел Галерея работ'
  },
  {
    title: 'Услуги',
    link: '#services',
    ariaInfo: 'Перейти в раздел Услуги'
  },
  {
    title: 'Контакты',
    link: '#contacts',
    ariaInfo: 'Перейти в раздел Контакты'
  },
];

export default navigationListItems;