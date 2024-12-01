'use client'

import { useState, useEffect } from 'react'
import { ThemeColor, themes } from '@/lib/themes'

export function ThemeColorSwitch() {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('purple')

  useEffect(() => {
    const savedTheme = localStorage.getItem('themeColor') as ThemeColor
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
  }, [])

  const handleThemeChange = (theme: ThemeColor) => {
    setCurrentTheme(theme)
    localStorage.setItem('themeColor', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <div className="flex items-center space-x-2">
      {(Object.keys(themes) as ThemeColor[]).map((theme) => (
        <button
          key={theme}
          onClick={() => handleThemeChange(theme)}
          className={`w-5 h-5 rounded-full transition-transform ${
            currentTheme === theme ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-600' : ''
          }`}
          style={{
            background: theme === 'purple' ? 'linear-gradient(135deg, #9333EA, #EC4899)' :
                       theme === 'blue' ? 'linear-gradient(135deg, #2563EB, #06B6D4)' :
                       'linear-gradient(135deg, #059669, #0D9488)'
          }}
          title={`${theme} theme`}
        />
      ))}
    </div>
  )
} 