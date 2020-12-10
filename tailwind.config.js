module.exports = {
  theme: {
    fontFamily: {
      'paragraph': ['Montserrat', 'Roboto', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      'title': ['Merriweather', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif']
    },
    extend: {
      fontSize: {
        'mobile': '1.35rem',

        
      },
      colors: {
        background: {
          default: '#FAFAFA'
        },
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)'
        },
        'color-title': {
          default: '#030517'
        },
        //292549
        'color-paragraph': {
          default: '#2E2F42'
        }
      }
    }
  },
  variants: {},
  plugins: []
};
