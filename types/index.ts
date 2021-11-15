import { FieldValues, UseFormRegister } from 'react-hook-form';

export type ButtonPropsType = {
  children: string;
  bgType?: string;
  type?: 'button' | 'submit';
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
  type?: string;
  register: UseFormRegister<FieldValues>;
  validation: any;
  error: any;
  isOk?: string;
};

export type PhotoPropsType = {
  id: number;
  src: string;
  alt: string;
  label: string;
};

export type NewPhotoType = {
  label: string;
  src: string;
};

export type PhotoType = Omit<PhotoPropsType, 'alt'>;

export type GalleryPropsType = {
  images?: PhotoType[];
};

export type ImgModalType = {
  children: any;
  isShow: boolean | any;
  showModal: () => void;
};

export type HeaderPropsType = {
  handleShowModalAddPhoto: () => void;
};
