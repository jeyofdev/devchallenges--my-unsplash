import { useState } from 'react';
import type { NextPage } from 'next';
import Header from '../components/organisms/Header';
import Gallery from '../components/organisms/Gallery';
import imagesApp from '../datas/files';
import ImgModal from '../components/organisms/ImgModal';
import InputText from '../components/atoms/InputText';
import Button from '../components/atoms/Button';

const Home: NextPage = () => {
  const [modalAddPhotoIsShow, setModalAddPhotoIsShow] =
    useState<boolean>(false);

  const handleShowModalAddPhoto = () => {
    setModalAddPhotoIsShow(true);
  };

  const cancelAddPhoto = () => {
    setModalAddPhotoIsShow(false);
  };

  const AddPhoto = () => {
    setModalAddPhotoIsShow(false);
  };

  return (
    <div className="container md:mx-auto my-8">
      <Header handleShowModalAddPhoto={handleShowModalAddPhoto} />
      <Gallery images={imagesApp} />

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
            />

            <InputText
              name="url"
              label="Photo URL"
              placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
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
