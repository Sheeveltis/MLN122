import { useState, useEffect } from 'react'
import useGameStore from './gameStore'

function PopupEvent() {
  const boughtSuperCar = useGameStore((s) => s.boughtSuperCar)
  const [show, setShow] = useState(false)
  const [chosen, setChosen] = useState(null)

  useEffect(() => {
    if (boughtSuperCar) setShow(true)
  }, [boughtSuperCar])

  const handleChoose = (opt) => {
    setChosen(opt)
    // TODO: Gọi hàm xử lý hậu quả tương ứng trong store
    setTimeout(() => setShow(false), 1500)
  }

  if (!show) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.18)',
      zIndex: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        padding: 32,
        minWidth: 340,
        color: '#3A2C00',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 18 }}>
          Công nhân A phải nghỉ việc vì không đủ tiền nuôi con đi học.<br/>
          Trong khi đó bạn vừa mua thêm một chiếc siêu xe.
        </div>
        {!chosen && (
          <>
            <button
              style={{
                width: '100%',
                padding: '10px 0',
                borderRadius: 8,
                border: '1px solid #eee',
                background: '#D6F6C2',
                color: '#2C401A',
                fontWeight: 600,
                fontSize: 16,
                marginBottom: 12,
                cursor: 'pointer',
              }}
              onClick={() => handleChoose('welfare')}
            >
              A. Cho thêm phúc lợi → giảm lợi nhuận
            </button>
            <button
              style={{
                width: '100%',
                padding: '10px 0',
                borderRadius: 8,
                border: '1px solid #eee',
                background: '#F6C244',
                color: '#3A2C00',
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
              }}
              onClick={() => handleChoose('ignore')}
            >
              B. Phớt lờ → tăng nguy cơ đình công, giảm sức khỏe công nhân
            </button>
          </>
        )}
        {chosen === 'welfare' && (
          <div style={{ color: '#388e3c', fontWeight: 600, marginTop: 16 }}>
            Bạn đã chọn cho thêm phúc lợi. Lợi nhuận sẽ giảm.
          </div>
        )}
        {chosen === 'ignore' && (
          <div style={{ color: '#d32f2f', fontWeight: 600, marginTop: 16 }}>
            Bạn đã phớt lờ. Nguy cơ đình công tăng, sức khỏe công nhân giảm.
          </div>
        )}
      </div>
    </div>
  )
}

export default PopupEvent 