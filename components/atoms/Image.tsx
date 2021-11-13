import { ImagePropsType } from '../../types';

const Image = ({ id, src, alt }: ImagePropsType) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    key={id}
    src={src}
    alt={alt}
    className="bg-gray-200 rounded-2xl break-inside mb-35 md:mb-35 w-full"
  />
);

export default Image;
