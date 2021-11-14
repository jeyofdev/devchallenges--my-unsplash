import { GalleryPropsType } from '../../types';
import Image from '../atoms/Image';

const Gallery = ({ images }: GalleryPropsType) => (
  <div className="mt-16">
    {images && images.length > 0 ? (
      <div className="box-border mx-auto sm:masonry-2 md:masonry-3 before:box-inherit after:box-inherit">
        {images.map((image) => (
          <Image
            key={image.id}
            id={image.id}
            label={image.label}
            src={image.src}
            alt={`Image with id ${image.id}`}
          />
        ))}
      </div>
    ) : (
      <div className="text-center w-full bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded relative">
        No image for the moment
      </div>
    )}
  </div>
);

export default Gallery;
