/* eslint-disable no-unused-vars */

import { Dispatch, SetStateAction } from 'react';
import { NewPhotoType, PhotoType } from '.';

// eslint-disable-next-line no-shadow
export enum TypeModal {
  ADD = 'add',
  DELETE = 'delete',
}

export type RemovePhotoType = (
  id: number,
  password: string,
  goodPassword: string,
  setPassword: Dispatch<SetStateAction<string>>
) => void;

export type PhotosContextType = {
  photosList: PhotoType[];
  modalAddPhotoIsShow: boolean;
  modalDeletePhotoIsShow: boolean;
  photoIdToRemove: number;
  hideOrShowModal: (type: TypeModal) => void;
  AddPhoto: (newPhoto: NewPhotoType) => void;
  removePhoto: RemovePhotoType;
  setPhotoIdToRemove: Dispatch<SetStateAction<number>>;
};
