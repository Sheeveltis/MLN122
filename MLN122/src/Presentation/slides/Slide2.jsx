import React from 'react'
import { BookOpen } from 'lucide-react'

export default function Slide2() {
  return (
    <div className="slide2-bg-container" style={{padding:0}}>
      <div className="slide2-bg-content" style={{color:'white'}}>
        <div className="slide-title1">
          <BookOpen size={32} style={{color:'white', verticalAlign:'middle',marginRight:12}}/>Khái niệm: Tích lũy tư bản
        </div>
        <ul className="slide2-list">
          <li>Quá trình chuyển hóa một phần giá trị thặng dư thành tư bản phụ thêm.</li>
          <li>Mục đích: mở rộng quy mô sản xuất (tái sản xuất mở rộng).</li>
          <li>Tái sản xuất giản đơn, tái sản xuất mở rộng là đặc trưng cơ bản của nền sản xuất tư bản chủ nghĩa.</li>
        </ul>
        <div className="slide2-note">
          Tích lũy tư bản là quá trình nhà tư bản chuyển hóa một phần giá trị thặng dư thành tư bản phụ thêm nhằm tái đầu tư mở rộng sản xuất. Thay vì sử dụng toàn bộ giá trị thặng dư để tiêu dùng, nhà tư bản giữ lại một phần để mua sắm thêm tư liệu sản xuất và sức lao động, qua đó thực hiện tái sản xuất mở rộng.<br/>
          {/* <i>Ví dụ:</i> <span className="slide-quote">“ABCDEF”</span> */}
        </div>
      </div>
    </div>
  )
} 