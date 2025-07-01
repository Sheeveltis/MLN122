import useGameStore from './gameStore'

function getGuideText(gold, workers, machines) {
  if (gold < 2) return 'Bạn cần thêm vàng để đầu tư!'
  if (workers.length > 0 && (workers.reduce((s, w) => s + w.happiness, 0) / workers.length) < 50)
    return 'Công nhân có vẻ đang mệt mỏi rồi…'
  if (workers.length + machines.length > 10) return 'Bạn đang mở rộng rất nhanh đó!'
  return 'Chào mừng bạn đến với nhà máy!'
}

function CharacterGuide() {
  const gold = useGameStore((s) => s.gold)
  const workers = useGameStore((s) => s.workers)
  const machines = useGameStore((s) => s.machines)
  const text = getGuideText(gold, workers, machines)

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 24 }}>
      <div style={{ width: 64, height: 64, marginRight: 18, flexShrink: 0 }}>
        {/* Simple SVG avatar */}
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="32" fill="#F6C244" />
          <ellipse cx="32" cy="36" rx="18" ry="16" fill="#fff" />
          <ellipse cx="32" cy="28" rx="10" ry="10" fill="#FFE7A0" />
          <ellipse cx="26" cy="28" rx="2" ry="3" fill="#3A2C00" />
          <ellipse cx="38" cy="28" rx="2" ry="3" fill="#3A2C00" />
          <path d="M28 34 Q32 38 36 34" stroke="#3A2C00" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        padding: '14px 20px',
        color: '#3A2C00',
        fontSize: 16,
        minWidth: 180,
        maxWidth: 320,
        fontFamily: 'inherit',
      }}>
        {text}
      </div>
    </div>
  )
}

export default CharacterGuide 