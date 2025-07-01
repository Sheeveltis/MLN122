import React, { useState } from 'react';
import HUDStatus from './HUDStatus';
import QuizComponent from './QuizComponent';
import styles from './GamePage.module.css';

const quizData = {
  question: 'Đâu là thủ đô của Việt Nam?',
  options: ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Huế'],
  correctAnswerIndex: 0,
};

const clamp = (val) => Math.max(0, Math.min(100, val));

const GamePage = () => {
  const [surplus, setSurplus] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [productivity, setProductivity] = useState(50);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      // Randomly increase surplus or happiness by 10
      if (Math.random() < 0.5) {
        setSurplus((s) => clamp(s + 10));
      } else {
        setHappiness((h) => clamp(h + 10));
      }
    } else {
      setHappiness((h) => clamp(h - 10));
    }
  };

  return (
    <div className={styles.gamePageContainer}>
      <div className={styles.leftPanel}>
        <QuizComponent
          question={quizData.question}
          options={quizData.options}
          correctAnswerIndex={quizData.correctAnswerIndex}
          onAnswer={handleAnswer}
        />
      </div>
      <div className={styles.rightPanel}>
        <HUDStatus
          surplus={surplus}
          happiness={happiness}
          productivity={productivity}
        />
      </div>
    </div>
  );
};

export default GamePage; 