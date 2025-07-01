import React from 'react';
import styles from './UpgradePanel.module.css';
import { Row, Col } from 'antd';

const upgrades = [
  {
    name: 'training',
    title: 'Đào tạo công nhân',
    desc: 'Tăng tốc độ sản xuất: productivity tăng 1.5 mỗi 10s (thay vì 1)',
    price: 30,
  },
  {
    name: 'welfare',
    title: 'Chăm sóc đời sống',
    desc: 'Tăng mức hạnh phúc khi trả lời đúng: +15 happiness thay vì +10',
    price: 25,
  },
];

const UpgradePanel = ({ onUpgrade, ownedUpgrades, surplus }) => {
  return (
    <div className={styles.panelContainer}>
      <h3 className={styles.panelTitle}>Nâng cấp</h3>
      <div className={styles.upgradeList}>
        {upgrades.map((upg) => {
          const owned = ownedUpgrades.includes(upg.name);
          const notEnough = surplus < upg.price;
          let btnText = 'Mua';
          let btnDisabled = false;
          if (owned) {
            btnText = 'Đã mua';
            btnDisabled = true;
          } else if (notEnough) {
            btnText = 'Không đủ thặng dư';
            btnDisabled = true;
          }
          return (
            <div className={styles.upgradeCard} key={upg.name}>
              <div className={styles.upgradeTitle}>{upg.title}</div>
              <div className={styles.upgradeDesc}>{upg.desc}</div>
              <Row align="middle" justify="space-between" className={styles.priceBtnRow} gutter={8}>
                <Col flex="auto">
                  <div className={styles.upgradePrice}>Giá: <span>{upg.price} thặng dư</span></div>
                </Col>
                <Col>
                  <button
                    className={styles.upgradeBtn}
                    disabled={btnDisabled}
                    onClick={() => onUpgrade(upg.name)}
                  >
                    {btnText}
                  </button>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpgradePanel; 