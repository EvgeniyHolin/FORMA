interface GalleryImage {
  imgPath: string,
  imgPath2x: string
};

interface GalleryObject {
  name: string,
  city: string,
  square: number,
  images: GalleryImage[]
};

const gallery: GalleryObject[] = [
  {
    name: 'Бытха',
    city: 'Сочи',
    square: 76,
    images: [
      {
        imgPath: '/src/images/gallery/bitha/image-1.jpg',
        imgPath2x: '/src/images/gallery/bitha/image-1@2x.jpg'
      },
      {
        imgPath: '/src/images/gallery/bitha/image-2.jpg',
        imgPath2x: '/src/images/gallery/bitha/image-2@2x.jpg'
      },
      {
        imgPath: '/src/images/gallery/bitha/image-3.jpg',
        imgPath2x: '/src/images/gallery/bitha/image-3@2x.jpg'
      },
    ]
  },
];

export default gallery;
