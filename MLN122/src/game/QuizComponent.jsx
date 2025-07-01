import React, { useState, useRef, useEffect } from 'react';

const baseBtnStyle = {
  width: '100%',
  padding: '18px 24px',
  fontSize: '1.08rem',
  border: '2px solid #d1d5db',
  borderRadius: 14,
  background: '#fff',
  color: '#222',
  textAlign: 'left',
  cursor: 'pointer',
  marginBottom: 18,
  transition: 'background 0.2s, border 0.2s, box-shadow 0.2s',
  fontWeight: 500,
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
};

const correctStyle = {
  borderColor: '#7ed957',
  background: '#eaffea',
  color: '#219a1a',
  fontWeight: 700,
};
const incorrectStyle = {
  borderColor: '#f44336',
  background: '#ffeaea',
  color: '#d32f2f',
  fontWeight: 700,
};
const hoverStyle = {
  boxShadow: '0 4px 16px rgba(74,144,226,0.08)',
  borderColor: '#4a90e2',
};

const nextBtnStyle = {
  padding: '12px 40px',
  fontSize: '1.1rem',
  fontWeight: 700,
  borderRadius: 10,
  border: 'none',
  background: '#4a90e2',
  color: '#fff',
  cursor: 'pointer',
  marginTop: 24,
  boxShadow: '0 2px 8px rgba(74,144,226,0.12)',
  transition: 'background 0.2s',
};

const QuizComponent = ({ question, options, correctAnswerIndex, onAnswer, showNext, onNext, gameStarted  }) => {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [hovered, setHovered] = useState(null);
  //count down đồng hồ
  const [quizCountdown, setQuizCountdown] = useState(15);
  const quizTimerRef = useRef();
  
  useEffect(() => {
    if (!gameStarted) return;

    quizTimerRef.current = setInterval(() => {
      setQuizCountdown((prev) => {
        if (prev <= 1) {
          return 15; // Reset lại sau khi về 0
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(quizTimerRef.current);
  }, [gameStarted]);
  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowResult(true);
    if (onAnswer) {
      onAnswer(idx === correctAnswerIndex);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    if (onNext) onNext();
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#d4d8f0',
      }}
    >
      <div style={{ width: '100%', maxWidth: 540, margin: '40px 0 0 0', background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.10)', padding: '40px 32px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h2 style={{ textAlign: 'center', margin: '0 0 32px 0', fontSize: 28, fontWeight: 800, color: '#232946', letterSpacing: 0.5, width: '100%' }}>{question}</h2>
        <div style={{ width: '100%' }}>
          {options.map((opt, idx) => {
            let style = { ...baseBtnStyle };
            if (!showResult && hovered === idx) style = { ...style, ...hoverStyle };
            if (showResult) {
              if (idx === correctAnswerIndex) style = { ...style, ...correctStyle };
              else if (idx === selected) style = { ...style, ...incorrectStyle };
            }
            return (
              <button
                key={idx}
                style={style}
                onClick={() => handleSelect(idx)}
                disabled={selected !== null}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <b style={{ marginRight: 10 }}>{String.fromCharCode(65 + idx)}.</b> {opt}
              </button>
            );
          })}
        </div>
        {showResult && (
          <div style={{ textAlign: 'center', marginTop: 32, width: '100%' }}>
            <span style={{
              color: selected === correctAnswerIndex ? '#219a1a' : '#d32f2f',
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 0.2,
            }}>
              {selected === correctAnswerIndex ? '🎉 Chính xác!' : '❌ Sai rồi!'}
            </span>
            {showNext && (
              <div>
                <button
                  style={nextBtnStyle}
                  onClick={handleNext}
                >
                  Câu tiếp theo
                </button>
              </div>
            )}
          </div>
        )}
         <div style={{
              height: 6,
              width: '80%',
              margin: '16px auto 0',
              background: '#e0e0e0',
              borderRadius: 4,
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                width: `${(quizCountdown / 15) * 100}%`,
                background: '#f5a623',
                transition: 'width 1s linear'
              }} />
            </div>
      </div>
    </div>
  );
};

export default QuizComponent; 