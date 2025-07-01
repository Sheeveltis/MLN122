import React from 'react';
import styles from './HUDStatus.module.css';
import UpgradePanel from './UpgradePanel';

function StatusBar({ label, value, colorClass }) {
  return (
    <div className={styles.statusBar}>
      <div className={styles.statusHeader}>
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className={styles.progressBg}>
        <div
          className={`${styles.progressFill} ${colorClass}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

const HUDStatus = ({ surplus, happiness, productivity, onUpgrade, ownedUpgrades }) => {
  return (
    <div className={styles.hudContainer}>
      <h2 className={styles.title}>Trạng thái</h2>
      <StatusBar label="Thặng dư" value={surplus} colorClass={styles.surplus} />
      <StatusBar label="Hạnh phúc" value={happiness} colorClass={styles.happiness} />
      <StatusBar label="Năng suất" value={productivity} colorClass={styles.productivity} />
      {onUpgrade && ownedUpgrades && (
        <UpgradePanel
          onUpgrade={onUpgrade}
          ownedUpgrades={ownedUpgrades}
          surplus={surplus}
        />
      )}
    </div>
  );
};

export default HUDStatus; 