import React from 'react'
import { TrendingUp } from 'lucide-react'
import imgRight from '../../assets/imgSlide4.png'
import imgRight2 from '../../assets/imgSlide4(2).png'

export default function Slide4() {
  return (
    <>
      <div className="slide-title">
        <TrendingUp size={32} style={{verticalAlign:'middle',marginRight:12,marginLeft:12}}/>Các nhân tố ảnh hưởng tới quy mô tích lũy
      </div>
      <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', marginRight:32}}>
          <img src={imgRight} alt="Tư bản và lao động" style={{maxWidth:400, borderRadius:12}}/>
          <img src={imgRight2} alt="Tư bản và lao động 2" style={{maxWidth:400, borderRadius:12, marginTop:32}}/>
        </div>
        <ul className="slide4-list" style={{flex:1}}>
          <li> <b>Trình độ khai thác sức lao động</b><br/>
            "Muốn tích lũy nhiều á? Thì phải làm sao? – Vắt kiệt sức lao động!"<br/>
            OT không lương nè 🙂<br/>
            Nhà tư bản tìm mọi cách để tăng thời gian làm việc, tăng tốc độ làm việc, tăng tỷ suất giá trị thặng dư.
          </li>
          <li> <b>Năng suất lao động xã hội</b><br/>
            Khi năng suất lao động tăng, hàng hóa rẻ đi, chi phí trả cho sức lao động giảm, giá trị thặng dư tăng.
          </li>
          <li> <b>Sử dụng hiệu quả máy móc</b><br/>
            Máy móc khấu hao gần hết vẫn sản xuất, giá trị tạo ra không còn tính vào chi phí, hiệu suất tăng, chi phí không tăng nhiều.
          </li>
          <li> <b>Đại lượng tư bản ứng trước</b><br/>
            Khi thị trường thuận lợi, nhà tư bản rót vốn nhiều hơn, sản lượng tăng, giá trị thặng dư tăng theo cấp số nhân.
          </li>
        </ul>
      </div>
    </>
  )
} 