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
  label: string;
  onClick?: () => void;
};

export type NewImageDatasType = {
  label: string;
  src: string;
};

export type ImageType = Omit<ImagePropsType, 'alt'>;

export type GalleryPropsType = {
  images: ImageType[];
  // eslint-disable-next-line no-unused-vars
  handleShowModalRemovePhoto: (id: number) => void;
};

export type ImgModalType = {
  children: any;
  isShow: boolean;
  showModal: Dispatch<SetStateAction<boolean>>;
};

export type HeaderPropsType = {
  handleShowModalAddPhoto: () => void;
};
