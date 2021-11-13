import { ButtonPropsType } from '../../types/index';

const Button = ({ children, type = 'success' }: ButtonPropsType) => {
  // eslint-disable-next-line operator-linebreak
  const classes =
    type === 'default'
      ? 'bg-transparent py-4 px-5 not-italic font-bold text-base leading-btn text-gray-300'
      : 'bg-success hover:bg-successHover py-4 px-5 rounded-xl shadow-btn not-italic font-bold text-base leading-btn text-light';

  return <button className={classes}>{children}</button>;
};

export default Button;
