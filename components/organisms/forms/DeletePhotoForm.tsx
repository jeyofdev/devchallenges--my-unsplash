/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PhotosContext } from '../../../context/PhotosContext';
import { TypeModal } from '../../../types/photosContextType';
import Button from '../../atoms/Button';
import InputText from '../../atoms/InputText';

const DeletePhotoForm = ({ goodPassword }: { goodPassword: string }) => {
  const context = useContext(PhotosContext);

  const [passwordIsOk, setPasswordIsOk] = useState<string | undefined>();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: { password: string }) => {
    if (data.password === goodPassword) {
      setPasswordIsOk(undefined);

      context?.removePhoto(
        context?.photoIdToRemove,
        data.password,
        goodPassword
      );
    }

    setPasswordIsOk('The password is wrong');
  };

  const validation = {
    password: {
      required: 'A password is required',
    },
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
      <InputText
        name="password"
        label="Password"
        placeholder="******************"
        type="password"
        register={register}
        validation={validation.password}
        error={errors.password}
        isOk={passwordIsOk}
      />

      <div className="flex justify-end mt-2">
        <Button
          bgType="submit"
          type="submit"
          onClick={() => context?.hideOrShowModal(TypeModal.DELETE)}
        >
          Cancel
        </Button>
        <Button type="submit" bgType="danger">
          Delete
        </Button>
      </div>
    </form>
  );
};

export default DeletePhotoForm;
