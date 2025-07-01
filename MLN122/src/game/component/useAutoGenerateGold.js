import { useEffect, useRef } from 'react'
import useGameStore from './gameStore'

// Custom event system for popups
const eventBus = {
  listeners: [],
  emit(event, payload) {
    this.listeners.forEach((cb) => cb(event, payload))
  },
  on(cb) {
    this.listeners.push(cb)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb)
    }
  },
}

export function useEventBus() {
  return eventBus
}

export default function useAutoGenerateGold() {
  const workers = useGameStore((s) => s.workers)
  const machines = useGameStore((s) => s.machines)
  const addGold = useGameStore((s) => s.addGold)
  const setWorkers = useGameStore((s) => s.setWorkers)
  const goldRef = useRef(0)
  const pauseRef = useRef(false)

  useEffect(() => {
    let interval = null
    let pauseTimeout = null
    function tick() {
      let goldToAdd = 0
      let updatedWorkers = workers.map((w) => {
        if (w.isStriking) return w // Đình công: không tạo vàng
        if (w.happiness < 30) {
          // Không tạo vàng
          let newStrikeLevel = w.strikeLevel
          let newIsStriking = w.isStriking
          if (w.happiness < 20) {
            newStrikeLevel = w.strikeLevel + 1
            if (newStrikeLevel >= 3) {
              newIsStriking = true
              eventBus.emit('workerStrike', { worker: w })
            }
          }
          return { ...w, strikeLevel: newStrikeLevel, isStriking: newIsStriking }
        }
        // Bình thường: tạo vàng
        goldToAdd += w.productivity || 1
        // Hồi phục strikeLevel nếu đã cải thiện
        return w.strikeLevel > 0 ? { ...w, strikeLevel: 0 } : w
      })
      // Máy móc luôn tạo vàng
      goldToAdd += machines.reduce((s, m) => s + (m.productivity || 2), 0)
      // Đếm số công nhân đình công
      const strikingCount = updatedWorkers.filter(w => w.isStriking).length
      if (strikingCount > 3 && !pauseRef.current) {
        pauseRef.current = true
        eventBus.emit('massStrike', {})
        pauseTimeout = setTimeout(() => {
          pauseRef.current = false
        }, 10000)
      }
      if (!pauseRef.current) {
        addGold(goldToAdd)
      }
      setWorkers(updatedWorkers)
    }
    interval = setInterval(tick, 2000)
    return () => {
      clearInterval(interval)
      if (pauseTimeout) clearTimeout(pauseTimeout)
    }
  }, [workers, machines, addGold, setWorkers])
} 