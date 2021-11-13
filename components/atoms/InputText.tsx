import { InputTextPropsType } from '../../types';

const InputText = ({
  name,
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
}: InputTextPropsType) => (
  <div>
    <label
      htmlFor={name}
      className="not-italic font-medium text-sm leading-5 text-gray-700"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full mb-2.5 mt-2.5 p-4.5 border border-solid border-gray-700 rounded-xl not-italic font-medium text-sm leading-5 text-gray-300 placeholder-gray-300 outline-none"
    />
  </div>
);

export default InputText;
