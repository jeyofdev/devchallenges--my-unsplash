import { createContext, ReactNode, useState } from 'react';
import imagesApp from '../datas/files';
import { NewPhotoType, PhotoType } from '../types';
import {
  PhotosContextType,
  RemovePhotoType,
  TypeModal,
} from '../types/photosContextType';

export const PhotosContext = createContext<PhotosContextType | null>(null);

const PhotosContextProvider = ({ children }: { children: ReactNode }) => {
  const [photosList, setPhotosList] = useState<PhotoType[]>(imagesApp);

  const [modalAddPhotoIsShow, setModalAddPhotoIsShow] =
    useState<boolean>(false);

  const [modalDeletePhotoIsShow, setModalDeletePhotoIsShow] =
    useState<boolean>(false);

  const [photoIdToRemove, setPhotoIdToRemove] = useState<number>(0);

  const hideOrShowModal = (type: TypeModal): void => {
    if (type === TypeModal.ADD) {
      setModalAddPhotoIsShow(!modalAddPhotoIsShow);
    }

    if (type === TypeModal.DELETE) {
      setModalDeletePhotoIsShow(!modalDeletePhotoIsShow);
    }
  };

  const AddPhoto = (newPhoto: NewPhotoType): void => {
    setPhotosList([...photosList, { id: photosList.length + 1, ...newPhoto }]);
    setModalAddPhotoIsShow(false);
  };

  const removePhoto: RemovePhotoType = (
    id,
    password,
    goodPassword,
    setPassword
  ) => {
    if (password === goodPassword) {
      setPhotosList(photosList.filter((photo) => photo.id !== id));
    }

    setModalDeletePhotoIsShow(false);
    setPassword('');
  };

  return (
    <PhotosContext.Provider
      value={{
        modalAddPhotoIsShow,
        modalDeletePhotoIsShow,
        photosList,
        photoIdToRemove,
        hideOrShowModal,
        AddPhoto,
        removePhoto,
        setPhotoIdToRemove,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosContextProvider;
