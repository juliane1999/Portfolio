import { createContext } from 'react'

export const themes = {
    dark: {
        color: 'grey',
        background: '#121212'
    },
    light: {
        color: '#121212',
        background: 'white'
    }
}

const ThemeContext = createContext(themes.dark)

export default ThemeContext