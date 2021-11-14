import { ChangeEvent, useContext, useState } from 'react';
import type { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import Header from '../components/organisms/Header';
import Gallery from '../components/organisms/Gallery';
import ImgModal from '../components/organisms/ImgModal';
import InputText from '../components/atoms/InputText';
import Button from '../components/atoms/Button';
import { NewPhotoType } from '../types';
import { TypeModal } from '../types/photosContextType';
import { PhotosContext } from '../context/PhotosContext';
import 'react-toastify/dist/ReactToastify.css';

const Home: NextPage = ({ goodPassword }: any) => {
  const context = useContext(PhotosContext);

  const [newPhoto, setNewPhoto] = useState<NewPhotoType>({
    label: '',
    src: '',
  });

  const [password, setPassword] = useState<string>('');

  const handleChangeAdd = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewPhoto({ ...newPhoto, [e.target.name]: e.target.value });
  };

  const handleChangeRemove = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <div className="container md:mx-auto my-8">
      <Header
        handleShowModalAddPhoto={() => context?.hideOrShowModal(TypeModal.ADD)}
      />
      <Gallery images={context?.photosList} />

      <ImgModal
        isShow={context?.modalAddPhotoIsShow}
        showModal={() => context?.hideOrShowModal(TypeModal.ADD)}
      >
        <h2 className="not-italic font-medium text-2xl leading-33 text-gray-800">
          Add a new photo
          <form className="mt-5">
            <InputText
              name="label"
              label="Label"
              placeholder="Suspendisse elit massa"
              value={newPhoto?.label}
              onChange={handleChangeAdd}
            />

            <InputText
              name="src"
              label="Photo URL"
              placeholder="https://images.unsplash.com/..."
              value={newPhoto?.src}
              onChange={handleChangeAdd}
            />

            <div className="flex justify-end mt-2">
              <Button
                type="default"
                onClick={() => context?.hideOrShowModal(TypeModal.ADD)}
              >
                Cancel
              </Button>
              <Button onClick={() => context?.AddPhoto(newPhoto)}>
                Submit
              </Button>
            </div>
          </form>
        </h2>
      </ImgModal>

      <ImgModal
        isShow={context?.modalDeletePhotoIsShow}
        showModal={() => context?.hideOrShowModal(TypeModal.DELETE)}
      >
        <h2 className="not-italic font-medium text-2xl leading-33 text-gray-800">
          Are you sure?
          <form className="mt-5">
            <InputText
              name="password"
              label="Password"
              placeholder="******************"
              type="password"
              value={password}
              onChange={handleChangeRemove}
            />

            <div className="flex justify-end mt-2">
              <Button
                type="default"
                onClick={() => context?.hideOrShowModal(TypeModal.DELETE)}
              >
                Cancel
              </Button>
              <Button
                type="danger"
                onClick={() =>
                  context?.removePhoto(
                    context?.photoIdToRemove,
                    password,
                    goodPassword,
                    setPassword
                  )
                }
              >
                Delete
              </Button>
            </div>
          </form>
        </h2>
      </ImgModal>

      <ToastContainer position="top-right" autoClose={3000} closeOnClick />
    </div>
  );
};

export const getServerSideProps = () => ({
  props: {
    goodPassword: process.env.GOOD_PASSWORD,
  },
});

export default Home;
