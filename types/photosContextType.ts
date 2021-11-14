/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

import { Dispatch, SetStateAction } from 'react';
import { NewPhotoType, PhotoType } from '.';

export enum TypeModal {
  ADD = 'add',
  DELETE = 'delete',
}

export enum NotifType {
  ADD_SUCCESS = 'ADD_SUCCESS',
  DELETE_SUCCESS = 'DELETE_SUCCESS',
  ERROR = 'ERROR',
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
