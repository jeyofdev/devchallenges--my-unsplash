import { ChangeEvent, useState } from 'react';
import type { NextPage } from 'next';
import Header from '../components/organisms/Header';
import Gallery from '../components/organisms/Gallery';
import imagesApp from '../datas/files';
import ImgModal from '../components/organisms/ImgModal';
import InputText from '../components/atoms/InputText';
import Button from '../components/atoms/Button';
import { ImageType, NewImageDatasType } from '../types';

const Home: NextPage = () => {
  const [modalAddPhotoIsShow, setModalAddPhotoIsShow] =
    useState<boolean>(false);

  const [photosList, setPhotosList] = useState<ImageType[]>(imagesApp);

  const [newPhoto, setNewPhoto] = useState<NewImageDatasType>({
    label: '',
    src: '',
  });

  const handleShowModalAddPhoto = (): void => {
    setModalAddPhotoIsShow(true);
  };

  const cancelAddPhoto = (): void => {
    setModalAddPhotoIsShow(false);
  };

  const AddPhoto = (): void => {
    setPhotosList([...photosList, { id: photosList.length + 1, ...newPhoto }]);
    setModalAddPhotoIsShow(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewPhoto({ ...newPhoto, [e.target.name]: e.target.value });
  };

  return (
    <div className="container md:mx-auto my-8">
      <Header handleShowModalAddPhoto={handleShowModalAddPhoto} />
      <Gallery images={photosList} />

      <ImgModal
        isShow={modalAddPhotoIsShow}
        setModalAddPhotoIsShow={setModalAddPhotoIsShow}
      >
        <h2 className="not-italic font-medium text-2xl leading-33 text-gray-800">
          Add a new photo
          <form className="mt-5">
            <InputText
              name="label"
              label="Label"
              placeholder="Suspendisse elit massa"
              value={newPhoto.label}
              onChange={handleChange}
            />

            <InputText
              name="src"
              label="Photo URL"
              placeholder="https://images.unsplash.com/..."
              value={newPhoto.src}
              onChange={handleChange}
            />

            <div className="flex justify-end mt-2">
              <Button type="default" onClick={cancelAddPhoto}>
                Cancel
              </Button>
              <Button onClick={AddPhoto}>Submit</Button>
            </div>
          </form>
        </h2>
      </ImgModal>

      {/* <ImgModal isShow={false}>
        <h2 className="not-italic font-medium text-2xl leading-33 text-gray-800">
          Are you sure?
          <form className="mt-5">
            <InputText
              name="password"
              label="Password"
              placeholder="******************"
              type="password"
            />

            <div className="flex justify-end mt-2">
              <Button type="default">Cancel</Button>
              <Button type="danger">Delete</Button>
            </div>
          </form>
        </h2>
      </ImgModal> */}
    </div>
  );
};

export default Home;
