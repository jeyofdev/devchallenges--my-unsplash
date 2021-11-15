import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { PhotosContext } from '../../../context/PhotosContext';
import { NewPhotoType } from '../../../types';
import { TypeModal } from '../../../types/photosContextType';
import Button from '../../atoms/Button';
import InputText from '../../atoms/InputText';

const AddPhotoForm = () => {
  const context = useContext(PhotosContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: NewPhotoType) => {
    context?.AddPhoto({
      label: data.label,
      src: data.src,
    });
  };

  const validation = {
    label: {
      required: 'A label is required',
    },
    src: {
      required: 'The image url is required',
    },
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
      <InputText
        name="label"
        label="Label"
        placeholder="Suspendisse elit massa"
        type="text"
        register={register}
        validation={validation.label}
        error={errors.label}
      />

      <InputText
        name="src"
        label="Photo URL"
        placeholder="https://images.unsplash.com/..."
        type="text"
        register={register}
        validation={validation.src}
        error={errors.src}
      />

      <div className="flex justify-end mt-2">
        <Button
          bgType="default"
          type="submit"
          onClick={() => context?.hideOrShowModal(TypeModal.ADD)}
        >
          Cancel
        </Button>
        <Button type="submit" bgType="success">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddPhotoForm;
