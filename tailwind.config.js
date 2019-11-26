module.exports = {
  theme: {
    fontFamily: {
      'moderat': ['moderat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
    },
    boxShadow: {
      'xs': '0px 1px 2px rgba(45, 55, 72, 0.08)',
      'base': '0px 1px 4px rgba(45, 55, 72, 0.12), 0px 1px 2px rgba(45, 55, 72, 0.04)',
      'default': '0px 1px 4px rgba(45, 55, 72, 0.12), 0px 1px 2px rgba(45, 55, 72, 0.04)',
      'md': '0px 2px 6px rgba(45, 55, 72, 0.1), 0px 2px 4px rgba(45, 55, 72, 0.06)',
      'lg': '0px 2px 6px rgba(45, 55, 72, 0.05), 0px 6px 15px rgba(45, 55, 72, 0.1)',
      'xl': '0px 4px 10px rgba(45, 55, 72, 0.04), 0px 10px 25px rgba(45, 55, 72, 0.1)',
      '2xl': '0px 17px 50px rgba(45, 55, 72, 0.25)',
      'none': 'none'
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      white: '#ffffff',
      gray: {
        90: '#1A202C',
        80: '#2D3748',
        70: '#4A5568',
        60: '#718096',
        50: '#A0AEC0',
        40: '#CBD5E0',
        30: '#E2E8F0',
        20: '#EDF2F7',
        10: '#F7FAFC'
      },
      brand: {
        90: '#252750',
        80: '#2F3574',
        70: '#353F97',
        60: '#3B4CBF',
        50: '#475DE5',
        40: '#8192EE',
        30: '#AEBAF4',
        20: '#DADDFB',
        10: '#F0F2FF'
      },
      red: {
        90: '#672323',
        80: '#973030',
        70: '#C53030',
        60: '#E53E3E',
        50: '#FA5757',
        40: '#FA8383',
        30: '#FEB2B2',
        20: '#FEDCDC',
        10: '#FFF5F5'
      },
      orange: {
        90: '#623527',
        80: '#91472C',
        70: '#C05621',
        60: '#E76916',
        50: '#F38830',
        40: '#F6AD55',
        30: '#FBD38D',
        20: '#FEEBC8',
        10: '#FFF8EB'
      },
      yellow: {
        90: '#60421A',
        80: '#8D5E20',
        70: '#C38728',
        60: '#EAAA1F',
        50: '#F7C42B',
        40: '#F7D85D',
        30: '#FAEB89',
        20: '#FEF8BE',
        10: '#FEFDE6'
      },
      green: {
        90: '#284927',
        80: '#2E612D',
        70: '#348232',
        60: '#38A336',
        50: '#4DB656',
        40: '#6FCC76',
        30: '#A4E5A9',
        20: '#D0F6D3',
        10: '#F1FEF2'
      },
      teal: {
        90: '#254346',
        80: '#285E61',
        70: '#2C7A7B',
        60: '#2F9997',
        50: '#38B2AC',
        40: '#51CFC4',
        30: '#8FE5DA',
        20: '#C0F7EE',
        10: '#E6FEFA'
      },
      purple: {
        90: '#382E56',
        80: '#574195',
        70: '#6B46C1',
        60: '#805AD5',
        50: '#9F7AEA',
        40: '#B794F4',
        30: '#D6BCFA',
        20: '#EFE2FE',
        10: '#F7F0FF'
      },
      pink: {
        90: '#5B254A',
        80: '#922B6C',
        70: '#B83280',
        60: '#D53F8C',
        50: '#ED64A6',
        40: '#F687B3',
        30: '#FBB6CE',
        20: '#FEDDE6',
        10: '#FFF0F3'
      }
    },
    extend: {}
  },
  variants: {
    flexDirection: ['odd', 'even'],
  },
  plugins: [
    require('tailwind-css-variables')({
      colors: 'color',
      screens: false,
      fontSize: false,
      fontWeight: false,
      lineHeight: false,
      letterSpacing: false,
      backgroundSize: false,
      borderWidth: false,
      borderRadius: false,
      width: false,
      height: false,
      minWidth: false,
      minHeight: false,
      maxWidth: false,
      maxHeight: false,
      padding: false,
      margin: false,
      boxShadow: false,
      zIndex: false,
      opacity: false
    })
  ]
}
