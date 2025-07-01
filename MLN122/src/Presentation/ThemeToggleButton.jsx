import React from 'react'

function ThemeToggleButton({ theme, toggleTheme, isDark }) {
  return (
    <div style={{ position: 'fixed', top: 20, right: 32, zIndex: 2000 }}>
      <button onClick={toggleTheme} style={{ padding: '10px 22px', borderRadius: 12, border: 'none', background: isDark ? '#232946' : '#6366f1', color: isDark ? '#f4f4fb' : '#fff', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 2px 8px #23294644', borderWidth: isDark ? 1.5 : 0, borderStyle: 'solid', borderColor: isDark ? '#a5b4fc' : 'transparent' }}>
        {theme === 'light' ? '🌙 Tối' : '☀️ Sáng  '}
      </button>
    </div>
  )
}

export default ThemeToggleButton 