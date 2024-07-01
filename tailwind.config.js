module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    './src/templates/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      '6xl': ['72px', { lineHeight: '80px', fontWeight: 600 }],
      '5xl': ['60px', { lineHeight: '72px', fontWeight: 600 }],
      '4xl': ['48px', { lineHeight: '56px', fontWeight: 600 }],
      '3xl': ['30px', { lineHeight: '40px', fontWeight: 600 }],
      '2xl': ['20px', { lineHeight: '32px', fontWeight: 500 }],
      lg: ['20px', { lineHeight: '32px', fontWeight: 400 }],
      base: ['16px', { lineHeight: '24px', fontWeight: 400 }],
      sm: ['12px', { lineHeight: '16px', fontWeight: 400 }],

      '6xl-mobile': ['60px', { lineHeight: '72px', fontWeight: 600 }],
      '5xl-mobile': ['48px', { lineHeight: '56px', fontWeight: 600 }],
      '4xl-mobile': ['40px', { lineHeight: '48px', fontWeight: 600 }],
    },
    colors: {
      primary: '#458e98', // green dark
      secondary: '#30444e', // gray dark
      tertiary: '#b1c3cd', // gray light

      blue: '#0047AB',
      silver: '#d8d8d8',
      green: '#84b795',

      white: '#fff',
      whiteLight: '#F4F7F8',
      black: '#231f20',
      transparent: 'transparent',
    },
    container: {
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      gridTemplateColumns: {
        '3-9': '3fr 9fr',
        '8-4': '8fr 4fr',
      },
      boxShadow: {
        button: 'inset 0 0 200px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
};
