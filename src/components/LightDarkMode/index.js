import {useState} from 'react'
import './index.css'

const LightDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="content">
        <h1>Welcome to Light Dark Mode</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  )
}

export default LightDarkMode
