import { useContext } from 'react';
import type { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import Header from '../components/organisms/Header';
import Gallery from '../components/organisms/Gallery';
import ImgModal from '../components/organisms/ImgModal';
import { TypeModal } from '../types/photosContextType';
import { PhotosContext } from '../context/PhotosContext';
import 'react-toastify/dist/ReactToastify.css';
import DeletePhotoForm from '../components/organisms/forms/DeletePhotoForm';
import AddPhotoForm from '../components/organisms/forms/AddPhotoForm';

const Home: NextPage = ({ goodPassword }: any) => {
  const context = useContext(PhotosContext);

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
        </h2>
        <AddPhotoForm />
      </ImgModal>

      <ImgModal
        isShow={context?.modalDeletePhotoIsShow}
        showModal={() => context?.hideOrShowModal(TypeModal.DELETE)}
      >
        <h2 className="not-italic font-medium text-2xl leading-33 text-gray-800">
          Are you sure?
        </h2>
        <DeletePhotoForm goodPassword={goodPassword} />
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
