import React from 'react'
import { Users } from 'lucide-react'

export default function Slide5() {
  return (
    <div className="slide5-bg-container" style={{position:'relative', minHeight:'100vh', padding:32}}>
      <div className="slide-title1" style={{position:'relative', zIndex:2}}>
        <Users size={32} style={{verticalAlign:'middle',marginRight:12}}/>Một số hệ quả của tích lũy tư bản
      </div>
      <ol className="slide5-list" style={{color: 'white',position:'relative', zIndex:2}}>
        <li>
          <b>Tăng cấu tạo hữu cơ của tư bản</b><br/>
          <div className="slide5-note">
            Cấu tạo hữu cơ của tư bản là tỷ lệ giữa tư bản bất biến (c) và tư bản khả biến (v).<br/>
            <b>Tư bản bất biến (c):</b> Mua máy móc, thiết bị, nguyên vật liệu...<br/>
            <b>Tư bản khả biến (v):</b> Trả tiền công cho công nhân.<br/>
            <b>Ví dụ:</b> 10 máy + 10 công nhân → 1:1; 20 máy + 10 công nhân → 2:1
          </div>
        </li>
        <li>
          <b>Tăng tích tụ và tập trung tư bản</b><br/>
          <div className="slide5-note">
          Tích tụ: Dùng tiền lời để mua thêm máy móc, nguyên liệu, xây nhà xưởng.<br/>
          Tập trung: Hợp nhất nhiều tư bản cá biệt (ví dụ: Grab mua lại Uber ở Đông Nam Á).
          </div>
        </li>
        <li>
          <b>Tăng chênh lệch thu nhập – Bần cùng hóa giai cấp công nhân</b><br/>
          <div className="slide5-note">
            "Quá trình tích lũy tư bản có tính hai mặt: tích lũy sự giàu sang về phía tư sản, tích lũy sự bần cùng về phía công nhân."<br/>
            <b>Bần cùng hóa tương đối:</b> Thu nhập công nhân tăng ít hơn tư sản.<br/>
            <b>Bần cùng hóa tuyệt đối:</b> Mức sống giảm xuống, thu nhập không đủ sống.
          </div>
        </li>
      </ol>
    </div>
  )
} 