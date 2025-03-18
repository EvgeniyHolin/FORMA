interface GalleryImage {
  imgPath: string,
  imgPath2x?: string
};

interface GalleryObject {
  name: string,
  city: string,
  square: number,
  images: GalleryImage[]
};

const gallery: GalleryObject[] = [
  {
    name: 'ЖК Маршала Жукова',
    city: 'Москва',
    square: 93,
    images: [
      {
        imgPath: '/src/images/gallery/marshalaZhukovaMsk/image-1.jpg'
      },
      {
        imgPath: '/src/images/gallery/marshalaZhukovaMsk/image-2.jpg'
      },
      {
        imgPath: '/src/images/gallery/marshalaZhukovaMsk/image-3.jpg'
      },
      {
        imgPath: '/src/images/gallery/marshalaZhukovaMsk/image-4.jpg'
      },
      {
        imgPath: '/src/images/gallery/marshalaZhukovaMsk/image-5.jpg'
      },
      {
        imgPath: '/src/images/gallery/marshalaZhukovaMsk/image-6.jpg'
      },
      {
        imgPath: '/src/images/gallery/marshalaZhukovaMsk/image-7.jpg'
      },
      {
        imgPath: '/src/images/gallery/marshalaZhukovaMsk/image-8.jpg'
      },
      {
        imgPath: '/src/images/gallery/marshalaZhukovaMsk/image-9.jpg'
      }
    ]
  },
  {
    name: 'Бытха',
    city: 'Сочи',
    square: 76,
    images: [
      {
        imgPath: '/src/images/gallery/bitha/image-1.jpg'
      },
      {
        imgPath: '/src/images/gallery/bitha/image-2.jpg'
      },
      {
        imgPath: '/src/images/gallery/bitha/image-3.jpg'
      },
      {
        imgPath: '/src/images/gallery/bitha/image-4.jpg'
      },
      {
        imgPath: '/src/images/gallery/bitha/image-5.jpg'
      },
    ]
  },
  {
    name: 'ЖК Островитянова',
    city: 'Москва',
    square: 76,
    images: [
      {
        imgPath: '/src/images/gallery/ostrovityanova/image-1.jpg'
      },
      {
        imgPath: '/src/images/gallery/ostrovityanova/image-2.jpg'
      },
      {
        imgPath: '/src/images/gallery/ostrovityanova/image-3.jpg'
      },
      {
        imgPath: '/src/images/gallery/ostrovityanova/image-4.jpg'
      },
      {
        imgPath: '/src/images/gallery/ostrovityanova/image-5.jpg'
      },
      {
        imgPath: '/src/images/gallery/ostrovityanova/image-6.jpg'
      },
      {
        imgPath: '/src/images/gallery/ostrovityanova/image-7.jpg'
      }
    ]
  },
];

export default gallery;
