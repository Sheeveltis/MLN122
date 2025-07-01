import useGameStore from './gameStore'

function getHappinessColor(happiness) {
  if (happiness < 30) return '#e53935' // đỏ
  if (happiness < 60) return '#fbc02d' // vàng
  return '#43a047' // xanh lá
}

function getStatusIcon(happiness, discontent) {
  if (discontent > 60) return '😡'
  if (happiness > 70) return '😊'
  if (happiness < 30) return '😞'
  return ''
}

function WorkerStatus() {
  const workers = useGameStore((s) => s.workers)
  if (workers.length === 0) return (
    <div style={{marginTop: 24, color: '#888', textAlign: 'center'}}>Chưa có công nhân nào.</div>
  )

  // Mức sống mong đợi: trung bình productivity của tất cả worker
  const expectedLiving = workers.length > 0
    ? workers.reduce((s, w) => s + w.productivity, 0) / workers.length
    : 1

  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>Tình trạng công nhân</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {workers.map((w) => {
          const actualLiving = w.salary * (8 / w.hours)
          const discontent = Math.max(0, Math.round((expectedLiving - actualLiving) * 100))
          const happiness = w.happiness
          const color = getHappinessColor(happiness)
          const icon = getStatusIcon(happiness, discontent)
          return (
            <div key={w.id} style={{
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              padding: 16,
              minWidth: 180,
              maxWidth: 220,
              color: '#3A2C00',
              border: `2px solid ${color}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              position: 'relative',
            }}>
              <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
                Công nhân #{w.id} {icon && <span style={{fontSize: 20, marginLeft: 6}}>{icon}</span>}
                {w.isStriking && (
                  <span style={{
                    background: '#e53935',
                    color: '#fff',
                    borderRadius: 6,
                    padding: '2px 8px',
                    marginLeft: 8,
                    fontWeight: 700,
                    fontSize: 14,
                  }}>⛔ Đình công</span>
                )}
                {!w.isStriking && w.happiness < 30 && (
                  <span style={{
                    background: '#fbc02d',
                    color: '#3A2C00',
                    borderRadius: 6,
                    padding: '2px 8px',
                    marginLeft: 8,
                    fontWeight: 700,
                    fontSize: 14,
                  }}>⚠️ Sắp đình công</span>
                )}
              </div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>
                Mức sống thực tế: <b>{actualLiving.toFixed(2)}</b>
              </div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>
                Mức sống mong đợi: <b>{expectedLiving.toFixed(2)}</b>
              </div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>
                Bất mãn: <b>{discontent}</b>
              </div>
              <div style={{ fontSize: 14, marginBottom: 2 }}>
                Hạnh phúc: <b style={{ color }}>{happiness}</b>
              </div>
            </div>
          )
        })}
      </div>
      <div style={{ fontSize: 13, color: '#888', marginTop: 12, fontStyle: 'italic' }}>
        Chỉ số này phản ánh sự bần cùng hóa tương đối của công nhân
      </div>
    </div>
  )
}

export default WorkerStatus 