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
  isShow?: boolean;
  showModal: any;
};

export type HeaderPropsType = {
  handleShowModalAddPhoto: () => void;
};
