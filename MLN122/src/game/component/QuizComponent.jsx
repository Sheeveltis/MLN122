import { useState, useEffect } from 'react'
import useGameStore from './gameStore'

const quizData = {
  question: 'Bạn có hiểu khái niệm tư bản ứng trước không?',
  choices: [
    'Là việc bỏ tiền đầu tư ban đầu để sản xuất',
    'Là tiền thưởng cho công nhân',
    'Là lợi nhuận của chủ',
  ],
  correct: 0,
  explanation: 'Chưa đúng, tư bản ứng trước là khoản chi ban đầu để tạo ra giá trị thặng dư.'
}

function QuizComponent() {
  const workers = useGameStore((s) => s.workers)
  const machines = useGameStore((s) => s.machines)
  const [showQuiz, setShowQuiz] = useState(false)
  const [answered, setAnswered] = useState(false)
  const [selected, setSelected] = useState(null)
  const [quizShown, setQuizShown] = useState(false)

  useEffect(() => {
    if (!quizShown && (workers.length + machines.length > 10)) {
      setShowQuiz(true)
      setQuizShown(true)
    }
  }, [workers.length, machines.length, quizShown])

  const handleAnswer = (idx) => {
    setSelected(idx)
    setAnswered(true)
  }

  const closeQuiz = () => {
    setShowQuiz(false)
  }

  if (!showQuiz) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.18)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        padding: 32,
        minWidth: 320,
        color: '#3A2C00',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 18 }}>{quizData.question}</div>
        <div style={{ marginBottom: 18 }}>
          {quizData.choices.map((c, idx) => (
            <div key={idx} style={{ marginBottom: 10 }}>
              <button
                style={{
                  width: '100%',
                  padding: '10px 0',
                  borderRadius: 8,
                  border: '1px solid #eee',
                  background: selected === idx ? '#F6C244' : '#f6f8fa',
                  color: '#3A2C00',
                  fontWeight: 600,
                  cursor: answered ? 'default' : 'pointer',
                  opacity: answered && selected !== idx ? 0.7 : 1,
                }}
                disabled={answered}
                onClick={() => handleAnswer(idx)}
              >
                {String.fromCharCode(65 + idx)}. {c}
              </button>
            </div>
          ))}
        </div>
        {answered && (
          <div style={{ margin: '16px 0', fontWeight: 600, color: selected === quizData.correct ? '#388e3c' : '#d32f2f' }}>
            {selected === quizData.correct
              ? 'Chính xác!'
              : quizData.explanation}
          </div>
        )}
        {answered && (
          <button
            style={{
              marginTop: 10,
              padding: '8px 24px',
              borderRadius: 8,
              border: 'none',
              background: '#B6D6F6',
              color: '#1A2C40',
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
            }}
            onClick={closeQuiz}
          >
            Đóng
          </button>
        )}
      </div>
    </div>
  )
}

export default QuizComponent 