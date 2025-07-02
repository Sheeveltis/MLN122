import React from 'react'
import { TrendingUp } from 'lucide-react'

export default function Slide6() {
  return (
    <div className="slide6-bg-container">
      <div className="slide-title">
        <TrendingUp size={32} style={{verticalAlign:'middle',marginRight:12}}/>Tích lũy tư bản & tăng trưởng kinh tế:<br/>Lợi ích và hệ lụy
      </div>
      <ol className="slide6-list">
        <li>Tích lũy tư bản tạo ra tăng trưởng kinh tế nhưng không đồng đều giữa các tầng lớp.</li>
        <li>Chủ tư bản hưởng lợi lớn nhất nhờ khả năng tái đầu tư giá trị thặng dư.</li>
        <li>Người lao động chịu thiệt, dễ bị bần cùng hóa.</li>
        <li>Sự tăng trưởng không ổn định, tiềm ẩn khủng hoảng.</li>
      </ol>
      <div className="slide6-quote" style={{marginTop: 24}}>
        “The ultimate reason for all real crises always remains the poverty and restricted consumption of the masses in contrast to the tendency of capitalist production to develop the productive forces as though only the absolute consuming power of society constituted their limit.”<br/>
        — Karl Marx, Tư bản, tập III.
      </div>
    </div>
  )
} 