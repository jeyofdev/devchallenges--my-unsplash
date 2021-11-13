export type ButtonPropsType = {
  children: string;
};

export type InputTextPropsType = {
  placeholder: string;
  icon?: boolean;
};

export type ImagePropsType = {
  id: number;
  src: string;
  alt: string;
};

type image = Omit<ImagePropsType, 'alt'>;

export type GalleryPropsType = {
  images: image[];
};
