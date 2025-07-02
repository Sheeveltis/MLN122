import React from 'react'
import { useNavigate } from 'react-router-dom'

function GameButton({ isDark }) {
  const navigate = useNavigate()

  const handleGameClick = () => {
    navigate('/game')
  }

  return (
    <div style={{ position: 'fixed', top: 20, right: 140, zIndex: 2000 }}>
      <button 
        onClick={handleGameClick} 
        style={{ 
          padding: '10px 22px', 
          borderRadius: 12, 
          border: 'none', 
          background: isDark ? '#232946' : '#10b981', 
          color: isDark ? '#f4f4fb' : '#fff', 
          fontWeight: 600, 
          fontSize: '1.1rem', 
          cursor: 'pointer', 
          boxShadow: '0 2px 8px #23294644', 
          borderWidth: isDark ? 1.5 : 0, 
          borderStyle: 'solid', 
          borderColor: isDark ? '#a5b4fc' : 'transparent' 
        }}
      >
        🎮 Game
      </button>
    </div>
  )
}

export default GameButton 