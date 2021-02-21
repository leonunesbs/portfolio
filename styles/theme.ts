// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    100: "#FAFAFA",
    200: "#7A7A7A",
    300: "#262626",
    400: "#1C1C1C",
    500: "#12A33A",
  },
  
}

const fonts = {
  heading: "Roboto",
  body: "All Round Gothic",
  mono: "Menlo, monospace",
}

const theme = extendTheme({ 
  colors,
  fonts
})

export default theme