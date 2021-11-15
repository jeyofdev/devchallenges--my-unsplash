import { InputTextPropsType } from '../../types';

const InputText = ({
  name,
  label,
  placeholder,
  type = 'text',
  register,
  validation,
  error,
  isOk,
}: InputTextPropsType) => (
  <div className="mb-7">
    <label
      htmlFor={name}
      className="not-italic font-medium text-sm leading-5 text-gray-700"
    >
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full mt-2.5 p-4.5 border border-solid border-gray-700 rounded-xl not-italic font-medium text-sm leading-5 text-gray-300 placeholder-gray-300 outline-none"
      {...register(name, validation)}
    />
    {error && (
      <p className="not-italic font-medium text-sm leading-5 text-danger mt-1">
        {error.message}
      </p>
    )}
    {!error && isOk && (
      <p className="not-italic font-medium text-sm leading-5 text-danger mt-1">
        {isOk}
      </p>
    )}
  </div>
);

export default InputText;
