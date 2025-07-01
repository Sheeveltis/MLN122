import React from 'react'
import { TrendingUp } from 'lucide-react'

export default function Slide4() {
  return (
    <>
      <div className="slide-title">
        <TrendingUp size={32} style={{verticalAlign:'middle',marginRight:12,marginLeft:12}}/>Các nhân tố ảnh hưởng tới quy mô tích lũy
      </div>
      <ol className="slide4-list">
        <li className="slide4-list"> <b>Trình độ khai thác sức lao động</b><br/>
          "Muốn tích lũy nhiều á? Thì phải làm sao? – Vắt kiệt sức lao động!"<br/>
          OT không lương nè 🙂<br/>
          Nhà tư bản tìm mọi cách để tăng thời gian làm việc, tăng tốc độ làm việc, tăng tỷ suất giá trị thặng dư.
        </li>
        <li className="slide4-list"> <b>Năng suất lao động xã hội</b><br/>
          Khi năng suất lao động tăng, hàng hóa rẻ đi, chi phí trả cho sức lao động giảm, giá trị thặng dư tăng.
        </li>
        <li className="slide4-list"> <b>Sử dụng hiệu quả máy móc</b><br/>
          Máy móc khấu hao gần hết vẫn sản xuất, giá trị tạo ra không còn tính vào chi phí, hiệu suất tăng, chi phí không tăng nhiều.
        </li>
        <li className="slide4-list"> <b>Đại lượng tư bản ứng trước</b><br/>
          Khi thị trường thuận lợi, nhà tư bản rót vốn nhiều hơn, sản lượng tăng, giá trị thặng dư tăng theo cấp số nhân.
        </li>
      </ol>
    </>
  )
} 