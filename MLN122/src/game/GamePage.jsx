import React, { useState, useRef, useEffect } from 'react';
import QuizComponent from './QuizComponent';
import HUDStatus from './HUDStatus';
import RandomEventModal from './RandomEventModal';
import PresentationButton from './PresentationButton';
import styles from './GamePage.module.css';
const quizData = [
    {
      question: 'Giá trị thặng dư là gì?',
      options: [
        'Phần lương vượt chuẩn của người lao động',
        'Khoản chênh lệch giữa giá trị hàng hóa và chi phí sản xuất',
        'Là giá trị mới dôi ra ngoài giá trị của hàng hóa sức lao động',
        'Lợi nhuận từ đầu tư chứng khoáng'
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Nguồn gốc của giá trị thặng dư là gì?',
      options: [
        'Máy móc và công nghệ hiện đại',
        'Thị trường chứng khoán',
        'Sức lao động của công nhân',
        'Vốn vay từ ngân hàng'
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Bản chất xã hội của giá trị thặng dư là gì?',
      options: [
        'Quan hệ giữa nhà tư bản và chính phủ',
        'Quan hệ giữa lao động làm thuê và người mua sức lao động',
        'Quan hệ giữa nhà nước và ngân hàng',
        'Quan hệ giữa người tiêu dùng và nhà sản xuất'
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Phương pháp sản xuất giá trị thặng dư tuyệt đối chủ yếu dựa trên:',
      options: [
        'Giảm giá bán sản phẩm',
        'Gia tăng thời gian lao động',
        'Đầu tư cổ phiếu',
        'Tăng năng suất lao động'
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Giá trị thặng dư có vai trò gì trong tích lũy tư bản?',
      options: [
        'Không liên quan',
        'Là nguồn gốc để tư bản hóa và mở rộng sản xuất',
        'Là thu nhập của nhà nước',
        'Là chi phí sản xuất'
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Tích lũy tư bản là gì?',
      options: [
        'Việc tăng trưởng dân số',
        'Việc nhà nước đầu tư vào hạ tầng',
        'Quá trình chuyển hóa giá trị thặng dư thành tư bản để tái sản xuất mở rộng',
        'Mua bán bất động sản'
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Tái sản xuất mở rộng là:',
      options: [
        'Sản xuất ở quy mô nhỏ lặp lại',
        'Lặp lại sản xuất y như cũ',
        'Mở rộng quy mô sản xuất bằng cách đầu tư thêm tư bản',
        'Phân phối hàng hóa công bằng'
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Ai là người chủ yếu quyết định quy mô tích lũy tư bản?',
      options: [
        'Chính phủ',
        'Nhà tư bản',
        'Công nhân',
        'Người tiêu dùng'
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Tích lũy nhiều hay ít phụ thuộc vào:',
      options: [
        'Giá vàng',
        'Tỷ giá hối đoái',
        'Tỷ lệ tiêu dùng và tiết kiệm giá trị thặng dư',
        'Tốc độ in tiền'
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Tư bản phụ thêm trong tích lũy là:',
      options: [
        'Khoản nợ vay ngân hàng',
        'Giá trị đầu tư nước ngoài',
        'Phần giá trị thặng dư dùng để mở rộng sản xuất',
        'Thuế nhà nước thu'
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Nhà tư bản kéo dài thời gian làm việc nhằm:',
      options: [
        'Tạo công ăn việc làm',
        'Giảm thời gian rảnh rỗi',
        'Tăng giá trị thặng dư',
        'Cải thiện phúc lợi xã hội'
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Năng suất lao động xã hội tăng giúp nhà tư bản:',
      options: [
        'Tăng lương cho công nhân',
        'Giảm chi phí, tăng giá trị thặng dư',
        'Tăng số ngày nghỉ',
        'Giảm khối lượng công việc'
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Sử dụng hiệu quả máy móc sẽ:',
      options: [
        'Làm tăng chi phí nhân công',
        'Làm tăng giá trị sản phẩm',
        'Tăng năng suất, giảm chi phí, tăng giá trị thặng dư',
        'Làm giảm lợi nhuận'
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Tư bản ứng trước càng lớn thì:',
      options: [
        'Nguy cơ phá sản càng cao',
        'Sản lượng và giá trị thặng dư có thể tăng cao',
        'Tăng rủi ro chính trị',
        'Gây lạm phát'
      ],
      correctAnswerIndex: 1,
    },
    {
      question: '"Một công nhân làm nhiều hàng hơn trong cùng thời gian" thể hiện:',
      options: [
        'Tăng ca',
        'Tăng tốc độ sản xuất',
        'Tăng năng suất lao động',
        'Bóc lột thặng dư tuyệt đối'
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Tăng cấu tạo hữu cơ của tư bản nghĩa là:',
      options: [
        'Giảm dùng máy móc, tăng thuê lao động',
        'Tăng tỷ lệ vốn dùng cho máy móc so với tiền công',
        'Tăng lương công nhân',
        'Mở rộng thị trường tiêu dùng'
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Tập trung tư bản là:',
      options: [
        'Tạo ra tư bản mới',
        'Phân phối lại tư bản hiện có qua sáp nhập, thâu tóm',
        'Làm tăng số lượng công ty nhỏ',
        'Quá trình in tiền'
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Tích tụ tư bản là:',
      options: [
        'Gộp các công ty lại với nhau',
        'Dùng giá trị thặng dư để tăng quy mô tư bản cá biệt',
        'Tăng thuế doanh nghiệp',
        'Mở rộng dịch vụ xã hội'
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Bần cùng hóa tương đối là:',
      options: [
        'Công nhân bị cắt lương',
        'Công nhân vẫn được tăng lương nhưng thấp hơn tốc độ tăng thu nhập của tư bản',
        'Công nhân bị mất việc',
        'Công nhân tăng chi tiêu'
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Theo Marx, sự tích lũy tư bản đồng thời là:',
      options: [
        'Tích lũy của cải cho toàn xã hội',
        'Tích lũy tri thức',
        'Tích lũy nghèo khổ, lao động đau đớn, suy đồi đạo đức ở phía đối lập',
        'Gia tăng khả năng tự do cá nhân'
      ],
      correctAnswerIndex: 2,
    }
  ];
  const randomEvents = [
    {
      title: "Công nhân yêu cầu tăng lương",
      description: "Một nhóm công nhân gửi đơn yêu cầu điều chỉnh lương cơ bản.",
      choices: [
        { text: "Chấp nhận yêu cầu", effects: { surplus: -10, happiness: +15 } },
        { text: "Từ chối", effects: { surplus: +5, happiness: -10 } }
      ]
    },
    {
      title: "Hỏng dây chuyền sản xuất",
      description: "Một dây chuyền bị hỏng khiến sản xuất gián đoạn.",
      choices: [
        { text: "Sửa gấp", effects: { surplus: -15 } },
        { text: "Chậm sửa", effects: { productivity: -10 } }
      ]
    },
    {
      title: "Báo chí tố cáo bóc lột lao động",
      description: "Bài báo lan truyền về tình trạng lao động tồi tệ trong công ty bạn.",
      choices: [
        { text: "Đính chính", effects: { happiness: -10 } },
        { text: "Tăng phúc lợi", effects: { surplus: -10, happiness: +15 } }
      ]
    },
    {
      title: "Giá nguyên vật liệu tăng",
      description: "Giá nhập nguyên vật liệu tăng mạnh trong tuần này.",
      choices: [
        { text: "Tăng giá bán", effects: { happiness: -10 } },
        { text: "Cắt lương công nhân", effects: { surplus: +10, happiness: -15 } }
      ]
    },
    {
      title: "Công nhân đình công nhẹ",
      description: "Một số công nhân biểu tình trước cổng nhà máy.",
      choices: [
        { text: "Đối thoại", effects: { surplus: -10, happiness: +10 } },
        { text: "Phớt lờ", effects: { happiness: -20 } }
      ]
    },
    {
      title: "Tổ chức công đoàn được lập ra",
      description: "Công nhân đề xuất thành lập công đoàn đại diện quyền lợi.",
      choices: [
        { text: "Hỗ trợ", effects: { surplus: -10, happiness: +15 } },
        { text: "Cấm đoán", effects: { happiness: -30 } }
      ]
    },
    {
      title: "Chính sách thuế mới",
      description: "Chính phủ yêu cầu tăng mức đóng thuế với doanh nghiệp.",
      choices: [
        { text: "Kháng nghị", effects: { happiness: -10 } },
        { text: "Chấp nhận", effects: { surplus: -15 } }
      ]
    },
    {
      title: "Đề xuất làm 4 ngày/tuần",
      description: "Công nhân đề xuất rút ngắn tuần làm việc còn 4 ngày.",
      choices: [
        { text: "Cho phép", effects: { productivity: -15, happiness: +20 } },
        { text: "Từ chối", effects: { happiness: -10 } }
      ]
    },
    {
      title: "Công ty khác tặng phúc lợi cao hơn",
      description: "Đối thủ cạnh tranh nâng mức phúc lợi cho công nhân.",
      choices: [
        { text: "Cạnh tranh theo", effects: { surplus: -15 } },
        { text: "Không làm gì", effects: { happiness: -10 } }
      ]
    },
    {
      title: "Phản ứng xã hội với thặng dư cao",
      description: "Dư luận phản đối tích lũy thặng dư quá mức của công ty.",
      choices: [
        { text: "Tăng đóng góp cộng đồng", effects: { surplus: -10, happiness: +10 } },
        { text: "Bỏ qua", effects: { happiness: -10 } }
      ]
    }
  ];
  
  


const clamp = (val) => Math.max(0, Math.min(100, val));

const UPGRADE_PRICES = {
  training: 30,
  welfare: 25,
};

function GameOverModal({ visible, onRestart }) {
  if (!visible) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(30,32,44,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 4px 32px rgba(0,0,0,0.18)', padding: '36px 32px 28px 32px', minWidth: 320, maxWidth: '90vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d32f2f', marginBottom: 18 }}>Game Over</div>
        <div style={{ fontSize: '1.15rem', color: '#232946', marginBottom: 28, textAlign: 'center' }}>Xã hội sụp đổ – Game Over</div>
        <button style={{ padding: '10px 32px', fontSize: '1.1rem', fontWeight: 600, borderRadius: 8, border: 'none', background: '#e2b714', color: '#232946', cursor: 'pointer', transition: 'background 0.2s' }} onClick={onRestart}>Chơi lại</button>
      </div>
    </div>
  );
}



const modalBase = {
  position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
  background: 'rgba(30,32,44,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center'
};
const modalContent = {
  background: '#fff', borderRadius: 14, boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
  padding: '36px 32px 28px', minWidth: 320, maxWidth: '90vw', display: 'flex', flexDirection: 'column', alignItems: 'center'
};
const buttonStyle = {
  padding: '10px 32px', fontSize: '1.1rem', fontWeight: 600, borderRadius: 8,
  border: 'none', background: '#e2b714', color: '#232946', cursor: 'pointer', transition: 'background 0.2s'
};

const StartModal = ({ visible, onStart }) => visible && (
  <div style={modalBase}><div style={modalContent}>
    <h2 style={{ color: '#2196f3' }}>🎮 Bắt đầu trò chơi</h2>
    <p style={{ color: '#000' }}>Bạn đã sẵn sàng điều hành nền sản xuất của mình?</p>
    <button style={buttonStyle} onClick={onStart}>Bắt đầu</button>
  </div></div>
);

const PerfectVictoryModal = ({ visible, onRestart }) => visible && (
  <div style={modalBase}>
    <div style={modalContent}>
    <h2 style={{ color: '#2e7d32' }}>🎖 Chiến thắng mỹ mãn!</h2>
    <p style={{ color: '#000' }}>
      Bạn đã tích lũy được mức thặng dư tối đa mà vẫn duy trì sự hài lòng của người lao động.  
      Một mô hình lý tưởng – tạm thời dung hòa được lợi nhuận và ổn định xã hội.
    </p>
    <button style={buttonStyle} onClick={onRestart}>Chơi lại</button>
  </div>
  </div>
);

const TroubledVictoryModal = ({ visible, onRestart }) => visible && (
  <div style={modalBase}><div style={modalContent}>
    <h2 style={{ color: '#f57c00' }}>⚖ Chiến thắng… nhưng lòng dân phẫn nộ</h2>
    <p style={{ color: '#000' }}>
      Bạn đã đạt được mức thặng dư tối đa – một thành tựu của tích lũy tư bản.  
      Nhưng cái giá phải trả là sự bất mãn ngày càng lớn của giai cấp lao động.  
      Tương lai đang lung lay dưới sự bất ổn xã hội tiềm tàng.
    </p>
    <button style={buttonStyle} onClick={onRestart}>Chơi lại</button>
  </div></div>
);

const GamePage = () => {
  const [surplus, setSurplus] = useState(40);
  const [happiness, setHappiness] = useState(50);
  const [productivity, setProductivity] = useState(40);
  const [countdown, setCountdown] = useState(10);
  const [ownedUpgrades, setOwnedUpgrades] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [hasWonPerfect, setHasWonPerfect] = useState(false);
  const [hasWonTroubled, setHasWonTroubled] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  const intervalRef = useRef();
  const surplusIntervalRef = useRef();
  const happinessIntervalRef = useRef();
  const productivityRef = useRef(productivity);

  const productivityStep = ownedUpgrades.includes('training') ? 1.5 : 1;
  const happinessStep = ownedUpgrades.includes('welfare') ? 15 : 10;

  useEffect(() => { productivityRef.current = productivity; }, [productivity]);

  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return;
    intervalRef.current = setInterval(() => {
      setCountdown(prev => prev === 1 ? (setProductivity(p => clamp(p + productivityStep)), 10) : prev - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [gameStarted, gameOver, gameWon, productivityStep]);

  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return;
    surplusIntervalRef.current = setInterval(() => {
      const add = Math.floor(productivityRef.current * 0.2);
      setSurplus(prev => clamp(prev + add));
    }, 30000);
    return () => clearInterval(surplusIntervalRef.current);
  }, [gameStarted, gameOver, gameWon]);

  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return;
    happinessIntervalRef.current = setInterval(() => {
      setHappiness(prev => clamp(prev - 5));
    }, 15000);
    return () => clearInterval(happinessIntervalRef.current);
  }, [gameStarted, gameOver, gameWon]);

  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return;
    if (productivity > 80 && happiness < 60) {
      const stressInterval = setInterval(() => {
        setHappiness(prev => clamp(prev - 5));
      }, 20000);
      return () => clearInterval(stressInterval);
    }
  }, [gameStarted, gameOver, gameWon, productivity, happiness]);

  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return;
    const eventInterval = setInterval(() => {
      const e = randomEvents[Math.floor(Math.random() * randomEvents.length)];
      setActiveEvent(e);
    }, 25000);
    return () => clearInterval(eventInterval);
  }, [gameStarted, gameOver, gameWon]);

  useEffect(() => {
    if (surplus >= 99 && !hasWonPerfect && !hasWonTroubled) {
      if (happiness > 50) setHasWonPerfect(true);
      else setHasWonTroubled(true);
      setGameWon(true);
    }
  }, [surplus, happiness, hasWonPerfect, hasWonTroubled]);

  useEffect(() => {
    if (happiness <= 0 && !gameOver) setGameOver(true);
  }, [happiness, gameOver]);

  const handleAnswer = (isCorrect) => {
    setAnswered(true);
    if (isCorrect) {
      Math.random() < 0.5
        ? setSurplus(s => clamp(s + 10))
        : setHappiness(h => clamp(h + happinessStep));
    } else {
      setHappiness(h => clamp(h - 10));
    }
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    setCurrentQuestion(prev => {
      if (prev < quizData.length - 1) return prev + 1;
      setQuizFinished(true); return prev;
    });
  };

  const handleUpgrade = (name) => {
    if (ownedUpgrades.includes(name)) return;
    const price = UPGRADE_PRICES[name];
    if (surplus >= price) {
      setSurplus(s => s - price);
      setOwnedUpgrades(prev => [...prev, name]);
    }
  };

  const handleEventChoice = (effects) => {
    if (effects.surplus) setSurplus(s => clamp(s + effects.surplus));
    if (effects.happiness) setHappiness(h => clamp(h + effects.happiness));
    if (effects.productivity) setProductivity(p => clamp(p + effects.productivity));
    setActiveEvent(null);
  };

  const warning = happiness <= 0 ? null :
    surplus > 90 && happiness < 40 ? <div className={styles.crisis}>Xã hội bất ổn do tích lũy cực đoan!</div> :
    happiness < 20 ? <div className={styles.warning}>Nguy cơ đình công!</div> : null;

  return (
    <>
      <PresentationButton />
      <StartModal visible={!gameStarted && !gameOver && !gameWon} onStart={() => setGameStarted(true)} />
      <PerfectVictoryModal visible={hasWonPerfect} onRestart={() => window.location.reload()} />
      <TroubledVictoryModal visible={hasWonTroubled} onRestart={() => window.location.reload()} />
      <RandomEventModal event={activeEvent} onChoose={handleEventChoice} />
      <GameOverModal visible={gameOver} onRestart={() => window.location.reload()} />

      <div className="game-layout" style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        <div className="game-main" style={{ flex: 2, paddingLeft: 200, paddingTop: 50, background: '#d4d8f0' }}>
          {quizFinished ? (
            <div style={{ background: '#eaffea', border: '2px solid #7ed957', borderRadius: 10, padding: '32px 18px', textAlign: 'center', color: '#219a1a', fontSize: '1.2rem', fontWeight: 600, margin: 40 }}>
              <h2>🎉 Hoàn thành bộ câu hỏi!</h2>
              <p>Bạn đã trả lời xong tất cả các câu hỏi.</p>
            </div>
          ) : (
            <QuizComponent
              question={quizData[currentQuestion].question}
              options={quizData[currentQuestion].options}
              correctAnswerIndex={quizData[currentQuestion].correctAnswerIndex}
              onAnswer={handleAnswer}
              showNext={answered && !quizFinished}
              onNext={handleNextQuestion}
              gameStarted={gameStarted}
            />
          )}
        </div>

        <div className="game-hud" style={{ flex: 1, background: '#232946' }}>
          <HUDStatus
            surplus={surplus}
            happiness={happiness}
            productivity={productivity}
            onUpgrade={handleUpgrade}
            ownedUpgrades={ownedUpgrades}
          />
          {warning}
        </div>
      </div>
    </>
  );
};

export default GamePage;
