import useGameStore from './gameStore'

function AssetStore() {
  const gold = useGameStore((s) => s.gold)
  const buyWorker = useGameStore((s) => s.buyWorker)
  const buyMachine = useGameStore((s) => s.buyMachine)
  const buyBuilding = useGameStore((s) => s.buyBuilding)
  const workers = useGameStore((s) => s.workers)
  const increaseSalary = useGameStore((s) => s.increaseSalary)
  const reduceHours = useGameStore((s) => s.reduceHours)
  const giveWelfare = useGameStore((s) => s.giveWelfare)

  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: 24,
      minWidth: 220,
      color: '#3A2C00',
      fontFamily: 'inherit',
      margin: '0 auto',
      textAlign: 'center',
    }}>
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>
        Số vàng: <span style={{ color: '#F6C244' }}>{gold}</span>
      </div>
      <button
        style={{
          display: 'block', width: '100%', marginBottom: 12, padding: '10px 0', borderRadius: 8,
          border: 'none', background: '#F6C244', color: '#3A2C00', fontWeight: 600, fontSize: 16, cursor: gold >= 1 ? 'pointer' : 'not-allowed',
          opacity: gold >= 1 ? 1 : 0.5,
        }}
        onClick={buyWorker}
        disabled={gold < 1}
      >
        Mua Công nhân (1 vàng)
      </button>
      <button
        style={{
          display: 'block', width: '100%', marginBottom: 12, padding: '10px 0', borderRadius: 8,
          border: 'none', background: '#B6D6F6', color: '#1A2C40', fontWeight: 600, fontSize: 16, cursor: gold >= 2 ? 'pointer' : 'not-allowed',
          opacity: gold >= 2 ? 1 : 0.5,
        }}
        onClick={buyMachine}
        disabled={gold < 2}
      >
        Mua Máy móc (2 vàng)
      </button>
      <button
        style={{
          display: 'block', width: '100%', marginBottom: 0, padding: '10px 0', borderRadius: 8,
          border: 'none', background: '#D6F6C2', color: '#2C401A', fontWeight: 600, fontSize: 16, cursor: gold >= 3 ? 'pointer' : 'not-allowed',
          opacity: gold >= 3 ? 1 : 0.5,
        }}
        onClick={buyBuilding}
        disabled={gold < 3}
      >
        Mua Xưởng (3 vàng)
      </button>
      {/* Worker recovery actions */}
      {workers.length > 0 && (
        <div style={{ marginTop: 18, textAlign: 'left' }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>Cải thiện điều kiện công nhân:</div>
          {workers.map(w => (
            <div key={w.id} style={{ marginBottom: 8, padding: 6, background: '#f9f9f9', borderRadius: 6 }}>
              <span style={{ fontWeight: 500 }}>Công nhân #{w.id}:</span>
              <button style={{ marginLeft: 8, padding: '2px 8px', borderRadius: 4, border: 'none', background: '#F6C244', color: '#3A2C00', fontWeight: 600, cursor: 'pointer' }} onClick={() => increaseSalary(w.id)}>Tăng lương</button>
              <button style={{ marginLeft: 6, padding: '2px 8px', borderRadius: 4, border: 'none', background: '#B6D6F6', color: '#1A2C40', fontWeight: 600, cursor: 'pointer' }} onClick={() => reduceHours(w.id)}>Tăng nghỉ</button>
              <button style={{ marginLeft: 6, padding: '2px 8px', borderRadius: 4, border: 'none', background: '#D6F6C2', color: '#2C401A', fontWeight: 600, cursor: 'pointer' }} onClick={() => giveWelfare(w.id)}>Thưởng phúc lợi</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AssetStore 