import CharacterGuide from './CharacterGuide'
import AssetStore from './AssetStore'
import FactoryStatus from './FactoryStatus'
import WorkerStatus from './WorkerStatus'
import QuizComponent from './QuizComponent'
import PopupEvent from './PopupEvent'
import useAutoGenerateGold from './useAutoGenerateGold'

function MainGamePage() {
  useAutoGenerateGold()

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: '#FFFBDE',
      color: '#3A2C00',
      fontFamily: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, margin: '32px 0 16px 0', letterSpacing: 1 }}>
        🏭 Game Tích Lũy Tư Bản
      </h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        maxWidth: 900,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 32,
      }}>
        {/* Cột trái: Avatar + thoại */}
        <div style={{ flex: '0 0 180px', minWidth: 120 }}>
          <CharacterGuide />
        </div>
        {/* Cột giữa: Trạng thái, mua tài sản, công nhân */}
        <div style={{ flex: 1, minWidth: 260, maxWidth: 420 }}>
          <FactoryStatus />
          <AssetStore />
          <WorkerStatus />
        </div>
      </div>
      {/* Quiz và Popup dạng overlay */}
      <QuizComponent />
      <PopupEvent />
    </div>
  )
}

export default MainGamePage 