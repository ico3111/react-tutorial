// src/ThemeToggleButton.jsx
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggleButton = () => {
    const [theme, toggleTheme] = useContext(ThemeContext)

    return (
        <button onClick={toggleTheme}>
            Muda para o tema {theme}
        </button>
    )

}

export default ThemeToggleButton