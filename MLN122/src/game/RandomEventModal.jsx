// RandomEventModal.jsx
import React from 'react';

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999
};

const boxStyle = {
  background: '#fff',
  borderRadius: 12,
  padding: 24,
  width: '90%',
  maxWidth: 420,
  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
  textAlign: 'center'
};

const buttonStyle = {
  padding: '10px 18px',
  margin: '12px 8px 0 8px',
  fontSize: 16,
  borderRadius: 8,
  border: 'none',
  cursor: 'pointer',
  fontWeight: 600
};

const RandomEventModal = ({ event, onChoose }) => {
    if (!event) return null;
  
    return (
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        background: 'rgba(0,0,0,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 9998
      }}>
        <div style={{
          background: 'white', padding: 24, borderRadius: 12,
          width: '90%', maxWidth: 420, boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
        }}>
          <h3 style={{ color: '#000' }}>{event.title}</h3>
          <p style={{ marginBottom: 24, color: '#000' }}>{event.description}</p>
          {event.choices.map((choice, idx) => (
            <button
              key={idx}
              style={{
                display: 'block', width: '100%', padding: '10px 16px',
                marginBottom: 12, border: 'none', borderRadius: 6,
                background: '#e2b714', color: '#232946', fontWeight: 600,
                cursor: 'pointer'
              }}
              onClick={() => onChoose(choice.effects)}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default RandomEventModal;
  
