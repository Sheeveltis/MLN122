import { useState, useEffect } from 'react'
import useGameStore from './gameStore'
import { useEventBus } from './useAutoGenerateGold'

function PopupEvent() {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('')
  const eventBus = useEventBus()

  useEffect(() => {
    const unsub = eventBus.on((event, payload) => {
      if (event === 'workerStrike') {
        setMessage(`Công nhân #${payload.worker.id} đã đình công vì quá bất mãn. Bạn sẽ mất năng suất nếu không cải thiện điều kiện làm việc.`)
        setShow(true)
        setTimeout(() => setShow(false), 3500)
      }
      if (event === 'massStrike') {
        setMessage('🏭 Nhà máy bị đình trệ vì công nhân đồng loạt đình công!')
        setShow(true)
        setTimeout(() => setShow(false), 5000)
      }
    })
    return () => unsub()
  }, [eventBus])

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
        fontWeight: 700,
        fontSize: 18,
      }}>
        {message}
      </div>
    </div>
  )
}

export default PopupEvent 