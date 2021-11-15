import { ButtonPropsType } from '../../types/index';

const Button = ({
  children,
  type,
  bgType = 'success',
  onClick,
}: ButtonPropsType) => {
  // eslint-disable-next-line operator-linebreak
  const classes =
    bgType === 'default'
      ? 'bg-transparent py-4 px-5 not-italic font-bold text-base leading-22 text-gray-300'
      : `bg-${bgType} hover:bg-${bgType}Hover py-4 px-5 rounded-xl shadow-btn not-italic font-bold text-base leading-22 text-light`;

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
