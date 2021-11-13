import { ButtonPropsType } from '../../types/index';

const Button = ({ children, type = 'success', onClick }: ButtonPropsType) => {
  // eslint-disable-next-line operator-linebreak
  const classes =
    type === 'default'
      ? 'bg-transparent py-4 px-5 not-italic font-bold text-base leading-22 text-gray-300'
      : `bg-${type} hover:bg-${type}Hover py-4 px-5 rounded-xl shadow-btn not-italic font-bold text-base leading-22 text-light`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
