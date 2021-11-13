import { ButtonPropsType } from '../../types/index';

const Button = ({ children }: ButtonPropsType) => (
  <button className="bg-success hover:bg-successHover py-4 px-5 rounded-xl shadow-btn not-italic font-bold text-base leading-btn text-light">
    {children}
  </button>
);

export default Button;
