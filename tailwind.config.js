module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        light: '#fff',
        success: '#3DB46D',
        successHover: '#42a66a',
        gray: {
          300: '#BDBDBD',
          700: '#4F4F4F',
          800: '#333',
        },
        overlay: 'rgba(0,0,0, 0.85)',
      },
      boxShadow: {
        btn: '0px 1px 6px rgba(0, 0, 0, 0.1)',
      },
      lineHeight: {
        btn: '22px',
        33: '33px',
      },
      spacing: {
        4.5: '18px',
        2.25: '9px',
        35: '35px',
        45: '45px',
        less50: '-50%',
      },
      width: {
        2: '7px',
        5.5: '22px',
      },
      height: {
        2: '7px',
      },
      fontSize: {
        9: '9px',
      },
      maxWidth: {
        300: '300px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
