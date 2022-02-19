const customizedMediaQuery = (media: number) =>
  `@media screen and (max-width: ${media}px)`

export const theme = {
  colors: {
    primary: '#6324c6',
    gray: '#a7b0be',
    main: '#e5e5e5',
    black: '#000000',
    white: '#ffffff',
    grayDark: '#4c5667'
  },
  fonts: {
    family: 'Mulish, sans-serif',

    weight: {
      light: 400,
      normal: 600,
      bold: 700
    },

    size: {
      large: '3.6rem',
      medium: '2rem',
      small: '1.6rem',
      xsmall: '1.2rem',
      xxsmall: '1rem'
    },

    lineHeight: {
      large: '4.52rem',
      medium: '2.5rem',
      small: '2rem'
    }
  },
  breakpoints: {
    xxsmall: customizedMediaQuery(320),
    xsmall: customizedMediaQuery(375),
    small: customizedMediaQuery(425),
    medium: customizedMediaQuery(768),
    large: customizedMediaQuery(1024),
    xlarge: customizedMediaQuery(1440)
  }
}
