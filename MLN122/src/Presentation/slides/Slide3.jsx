import React from 'react'
import { PiggyBank } from 'lucide-react'

export default function Slide3() {
  return (
    <div className="slide3-bg-container">
      <div className="slide3-bg-content">
        <div className="slide-title">
          <PiggyBank size={32} style={{verticalAlign:'middle',marginRight:12}}/>Quy mô tích lũy 
        </div>
        <ul className="slide3-list">
          <li>Tích lũy nhiều hay ít tùy vào chia tiền ra sao giữa xài và để dành.</li>
          <li>Quy mô tích lũy phụ thuộc vào nhà tư bản: xài ít, để dành nhiều thì tích lũy được nhiều; xài nhiều, để dành ít thì tích lũy được ít.</li>
        </ul>
      </div>
    </div>
  )
} 