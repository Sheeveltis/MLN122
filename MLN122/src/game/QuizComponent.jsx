import React, { useState } from 'react';
import styles from './QuizComponent.module.css';

const QuizComponent = ({ question, options, correctAnswerIndex, onAnswer }) => {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowResult(true);
    if (onAnswer) {
      onAnswer(idx === correctAnswerIndex);
    }
  };

  return (
    <div className={styles.quizContainer}>
      <div className={styles.question}>{question}</div>
      <div className={styles.options}>
        {options.map((opt, idx) => {
          let btnClass = styles.optionBtn;
          if (selected !== null) {
            if (idx === correctAnswerIndex) btnClass += ' ' + styles.correct;
            else if (idx === selected) btnClass += ' ' + styles.incorrect;
          }
          return (
            <button
              key={idx}
              className={btnClass}
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
            >
              <span className={styles.optionLabel}>{String.fromCharCode(65 + idx)}.</span> {opt}
            </button>
          );
        })}
      </div>
      {showResult && (
        <div className={selected === correctAnswerIndex ? styles.resultCorrect : styles.resultIncorrect}>
          {selected === correctAnswerIndex ? 'Chính xác!' : 'Sai rồi!'}
        </div>
      )}
    </div>
  );
};

export default QuizComponent; 