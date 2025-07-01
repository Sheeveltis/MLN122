import useGameStore from './gameStore'

function FactoryStatus() {
  const workers = useGameStore((s) => s.workers)
  const machines = useGameStore((s) => s.machines)
  const buildings = useGameStore((s) => s.buildings)

  const totalWorkers = workers.length
  const totalMachines = machines.length
  const totalBuildings = buildings
  const maxSlots = totalBuildings * 5
  const usedSlots = totalWorkers + totalMachines
  const organicRatio = totalWorkers === 0 ? '∞' : (totalMachines / totalWorkers).toFixed(2)
  const isFull = usedSlots > maxSlots

  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: 20,
      minWidth: 260,
      color: '#3A2C00',
      fontFamily: 'inherit',
      margin: '0 auto',
      marginBottom: 16,
    }}>
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>Trạng thái Xưởng</div>
      <div>Công nhân: <b>{totalWorkers}</b></div>
      <div>Máy móc: <b>{totalMachines}</b></div>
      <div>Số xưởng: <b>{totalBuildings}</b></div>
      <div>Slot tối đa: <b>{maxSlots}</b></div>
      <div>Slot đang dùng: <b>{usedSlots}</b></div>
      <div>Tỷ lệ cấu tạo hữu cơ: <b>{organicRatio}</b></div>
      {isFull && (
        <div style={{ color: '#d32f2f', fontWeight: 600, marginTop: 10 }}>
          Xưởng đã đầy
        </div>
      )}
    </div>
  )
}

export default FactoryStatus 