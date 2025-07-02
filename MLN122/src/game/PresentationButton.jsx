import React from 'react'
import { useNavigate } from 'react-router-dom'

function PresentationButton() {
  const navigate = useNavigate()

  const handlePresentationClick = () => {
    navigate('/presentation')
  }

  return (
    <div style={{ position: 'fixed', top: 20, right: 32, zIndex: 2000 }}>
      <button 
        onClick={handlePresentationClick} 
        style={{ 
          padding: '10px 22px', 
          borderRadius: 12, 
          border: 'none', 
          background: '#6366f1', 
          color: '#fff', 
          fontWeight: 600, 
          fontSize: '1.1rem', 
          cursor: 'pointer', 
          boxShadow: '0 2px 8px #23294644'
        }}
      >
        📊 Presentation
      </button>
    </div>
  )
}

export default PresentationButton 