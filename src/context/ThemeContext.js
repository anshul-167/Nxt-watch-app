import React from 'react'

const ThemeContext = React.createContext({
  isDark: true,
  onChangeTheme: () => {},
  savedVideos: [],
})

export default ThemeContext
