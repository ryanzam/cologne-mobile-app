import {Dimensions} from "react-native"
const { height, width } = Dimensions.get("window")

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge:24,
    width,
    height
}

const COLORS = {
    primary: "#02315E",
    secondary: "#806491",
    tertiary: "#00457E",
    accent: "#B9848C",
    white: "#FFFFFF",
    black: "#00000"
}

export { SIZES, COLORS }