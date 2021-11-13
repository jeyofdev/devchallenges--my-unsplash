import { Dispatch, SetStateAction } from 'react';

export type ButtonPropsType = {
  children: string;
  type?: string;
  onClick?: () => void;
};

export type InputSearchPropsType = {
  placeholder: string;
  icon?: boolean;
};

export type InputTextPropsType = {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: any;
  type?: string;
};

export type ImagePropsType = {
  id: number;
  src: string;
  alt: string;
  label?: string;
};

export type NewImageDatasType = {
  label: string;
  src: string;
};

export type ImageType = Omit<ImagePropsType, 'alt'>;

export type GalleryPropsType = {
  images: ImageType[];
};

export type ImgModalType = {
  children: any;
  isShow: boolean;
  setModalAddPhotoIsShow: Dispatch<SetStateAction<boolean>>;
};

export type HeaderPropsType = {
  handleShowModalAddPhoto: () => void;
};
