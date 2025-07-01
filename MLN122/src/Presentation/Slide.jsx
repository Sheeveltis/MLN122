import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function Slide({ title, image, content, fade, onPrev, onNext, disablePrev, disableNext, anim, children }) {
  return (
    <div className={`presentation-card desktop ${anim || ''}`} style={{position:'relative'}}>
      {/* Nút Prev bên trái */}
      {!disablePrev && (
        <button
          onClick={onPrev}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            padding: '16px 20px',
            borderRadius: '0 18px 18px 0',
            background: '#6366f1',
            color: '#fff',
            border: 'none',
            fontSize: '1.3rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 2px 8px #6366f122',
            outline: 'none',
            borderRight: '2px solid #fff',
          }}
        >
          <ArrowLeft size={28} />
        </button>
      )}
      {/* Nút Next bên phải */}
      {!disableNext && (
        <button
          onClick={onNext}
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            padding: '16px 20px',
            borderRadius: '18px 0 0 18px',
            background: '#6366f1',
            color: '#fff',
            border: 'none',
            fontSize: '1.3rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 2px 8px #6366f122',
            outline: 'none',
            borderLeft: '2px solid #fff',
          }}
        >
          <ArrowRight size={28} />
        </button>
      )}
      <div className="slide-title">{title}</div>
      {image && (
        <div className="slide-image"><img src={image} alt="minh họa" /></div>
      )}
      <div className="slide-content">{content}</div>
      {children}
    </div>
  )
}

export default Slide 