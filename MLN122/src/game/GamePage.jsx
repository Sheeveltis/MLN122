import React, { useState, useEffect, useRef } from 'react';
import HUDStatus from './HUDStatus';
import QuizComponent from './QuizComponent';
import { Row, Col } from 'antd';
import 'antd/dist/reset.css';
import styles from './GamePage.module.css';

const quizData = {
  question: 'Đâu là thủ đô của Việt Nam?',
  options: ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Huế'],
  correctAnswerIndex: 0,
};

const clamp = (val) => Math.max(0, Math.min(100, val));

const UPGRADE_PRICES = {
  training: 30,
  welfare: 25,
};

const GamePage = () => {
  const [surplus, setSurplus] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [productivity, setProductivity] = useState(50);
  const [countdown, setCountdown] = useState(10);
  const [ownedUpgrades, setOwnedUpgrades] = useState([]);
  const intervalRef = useRef();

  // Xác định tốc độ tăng productivity
  const hasTraining = ownedUpgrades.includes('training');
  const productivityStep = hasTraining ? 1.5 : 1;

  // Xác định mức tăng happiness khi trả lời đúng
  const hasWelfare = ownedUpgrades.includes('welfare');
  const happinessStep = hasWelfare ? 15 : 10;

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      if (Math.random() < 0.5) {
        setSurplus((s) => clamp(s + 10));
      } else {
        setHappiness((h) => clamp(h + happinessStep));
      }
    } else {
      setHappiness((h) => clamp(h - 10));
    }
  };

  // Cảnh báo
  let warning = null;
  if (happiness < 20) {
    warning = <div className={styles.warning}>Nguy cơ đình công!</div>;
  }
  if (surplus > 90 && happiness < 40) {
    warning = <div className={styles.crisis}>Khủng hoảng xã hội!</div>;
  }

  // Tự động tăng productivity mỗi 10s và hiển thị countdown
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          setProductivity((p) => clamp(p + productivityStep));
          return 10;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [productivityStep]);

  // Xử lý mua nâng cấp
  const handleUpgrade = (name) => {
    if (ownedUpgrades.includes(name)) return;
    const price = UPGRADE_PRICES[name];
    if (surplus >= price) {
      setSurplus((s) => s - price);
      setOwnedUpgrades((prev) => [...prev, name]);
    }
  };

  return (
    <Row className={styles.gamePageAntd} style={{ minHeight: '100vh' }}>
      <Col span={16} className={styles.leftPanel}>
        <div className={styles.alerts}>{warning}</div>
        <div className={styles.countdownBox}>
          <span className={styles.countdownLabel}>Tăng năng suất sau: </span>
          <span className={styles.countdownValue}>{countdown}s</span>
        </div>
        <QuizComponent
          question={quizData.question}
          options={quizData.options}
          correctAnswerIndex={quizData.correctAnswerIndex}
          onAnswer={handleAnswer}
        />
      </Col>
      <Col span={8} className={styles.rightPanel}>
        <HUDStatus
          surplus={surplus}
          happiness={happiness}
          productivity={productivity}
          onUpgrade={handleUpgrade}
          ownedUpgrades={ownedUpgrades}
        />
      </Col>
    </Row>
  );
};

export default GamePage; 