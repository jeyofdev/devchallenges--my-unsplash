import { GalleryPropsType } from '../../types';
import Image from '../atoms/Image';

const Gallery = ({ images }: GalleryPropsType) => (
  <div className="mt-16">
    <div className="box-border mx-auto sm:masonry-2 md:masonry-3 before:box-inherit after:box-inherit">
      {images.length > 0 ? (
        images.map((image) => (
          <Image
            key={image.id}
            id={image.id}
            label={image.label}
            src={image.src}
            alt={`Image with id ${image.id}`}
          />
        ))
      ) : (
        <div>rien</div>
      )}
    </div>
  </div>
);

export default Gallery;
