import { createContext } from 'react'

export const themes = {
    dark: {
        color: 'aqua',
        background: 'black'
    },
    light: {
        color: 'black',
        background: 'white'
    }
}

const ThemeContext = createContext(themes.dark)

export default ThemeContext