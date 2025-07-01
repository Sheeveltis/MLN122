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
        “Accumulation of wealth at one pole is, therefore, at the same time accumulation of misery, agony of toil slavery, ignorance, brutality, mental degradation, at the opposite pole, i.e., on the side of the class that produces its own product in the form of capital.”<br/>
        — Karl Marx, Tư bản, tập I.
      </div>
    </div>
  )
} 