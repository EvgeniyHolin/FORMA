interface Skill {
  id: number,
  text: string,
  imagePath: string,
  imagePath2x: string,
  imagePathTablet: string,
  imagePathTablet2x: string,
  altText: string
};

const skills: Skill[] = [
  {
    id: 1,
    text: 'Мы&nbsp;разработаем для вас концепцию идеального интерьера',
    imagePath: '/src/images/skills/skill-1.jpg',
    imagePath2x: '/src/images/skills/skill-1@2x.jpg',
    imagePathTablet: '/src/images/skills/skill-1-tablet.jpg',
    imagePathTablet2x: '/src/images/skills/skill-1-tablet@2x.jpg',
    altText: 'Визуализация проекта'
  },
  {
    id: 2,
    text: 'Тщательно займёмся инженерными аспектами, подберём и&nbsp;приобретём высококачественные материалы',
    imagePath: '/src/images/skills/skill-2.jpg',
    imagePath2x: '/src/images/skills/skill-2@2x.jpg',
    imagePathTablet: '/src/images/skills/skill-2-tablet.jpg',
    imagePathTablet2x: '/src/images/skills/skill-2-tablet@2x.jpg',
    altText: 'Изображение строительного материала'
  },
  {
    id: 3,
    text: 'Также гарантируем высокое качество выполнения строительных работ',
    imagePath: '/src/images/skills/skill-3.jpg',
    imagePath2x: '/src/images/skills/skill-3@2x.jpg',
    imagePathTablet: '/src/images/skills/skill-3-tablet.jpg',
    imagePathTablet2x: '/src/images/skills/skill-3-tablet@2x.jpg',
    altText: 'Готовое помещение после ремонта'
  }
];

export default skills;