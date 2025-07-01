import React from 'react'
import { ShieldCheck } from 'lucide-react'

export default function Slide7() {
  return (
    <div className="slide7-bg-container">
      <div className="slide7-content-bg">
        <div className="slide-title">
          <ShieldCheck size={32} style={{verticalAlign:'middle',marginRight:12}}/>Một số giải pháp của Nhà nước
        </div>
        <ul className="slide7-list">
          <li className="slide7-list"><b>Tăng lương tối thiểu theo vùng</b><br/>Từ 1/7/2025, mức lương tối thiểu mới áp dụng tại 34 tỉnh. Từ 1/1/2026, Công đoàn đề xuất tăng tiếp 8.3–9.2% để bù trượt giá.</li>
          <li className="slide7-list"><b>Mở rộng bảo hiểm y tế</b><br/>Khám sức khỏe định kỳ miễn phí, tiến tới miễn viện phí toàn dân, ưu tiên người nghèo, người cao tuổi, dân tộc thiểu số.</li>
          <li className="slide7-list"><b>Miễn học phí</b><br/>Từ 2025–2026, miễn học phí cho toàn bộ trẻ em mầm non đến hết THPT tại trường công lập.</li>
          <li className="slide7-list"><b>Phát triển nhà ở xã hội & Quỹ Quốc gia về nhà ở</b><br/>Xây dựng 100.000–130.000 căn hộ xã hội 2024–2025, hỗ trợ vốn cho các dự án nhà ở giá rẻ.</li>
        </ul>
      </div>
    </div>
  )
} 