import React from 'react'
import { Lightbulb } from 'lucide-react'
import imgSlide1 from '../../assets/imgSlide1.jpg'

export default function Slide1() {
  return (
    <div className="slide1-container">
      <div className="slide1-image-section">
        <img src={imgSlide1} alt="Giá trị thặng dư" className="slide1-image" />
      </div>
      <div className="slide1-text-section">
        <div className="slide1-title">
          <Lightbulb size={32} style={{verticalAlign:'middle',marginRight:12}}/>Giá trị thặng dư & tăng trưởng kinh tế
        </div>
        <div className="slide1-quote">
          “Trong nền kinh tế thị trường, giá trị thặng dư có thể được sử dụng để đầu tư và tạo ra lợi nhuận tiếp theo. Điều này có thể dẫn đến sự tăng trưởng kinh tế và phát triển. Tuy nhiên, liệu sự tăng trưởng này có bền vững và có lợi cho tất cả các tầng lớp xã hội hay chỉ tập trung vào một số người giàu có?”
        </div>
        {/* <div className="slide1-note">
          <b>Trước khi trả lời câu hỏi này, mình xin nhắc lại về thặng dư:</b><br/>
          <i>Mời Kiệt trình bày</i><br/>
          <span>"ABCDEF"</span>
        </div> */}
      </div>
    </div>
  )
} 