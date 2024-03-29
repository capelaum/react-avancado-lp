export type Theme = {
  grid: {
    container: string
    gutter: string
  }
  border: {
    radius: string
  }
  font: {
    family: string
    bold: number
    sizes: {
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
    }
  }
  colors: {
    primary: string
    primaryHover: string
    secondary: string
    mainBg: string
    boxBg: string
    texts: string
    white: string
    black: string
    gray: string
  }
  spacings: {
    xxsmall: string
    xsmall: string
    small: string
    medium: string
    large: string
    xlarge: string
    xxlarge: string
  }
}
