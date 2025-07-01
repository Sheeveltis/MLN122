import React from 'react'
import { Users } from 'lucide-react'

export default function Slide5() {
  return (
    <>
      <div className="slide-title">
        <Users size={32} style={{verticalAlign:'middle',marginRight:12}}/>Một số hệ quả của tích lũy tư bản
      </div>
      <ol>
        <li>
          <b>Tăng cấu tạo hữu cơ của tư bản</b><br/>
          <div className="slide5-note">
            Cấu tạo hữu cơ của tư bản là tỷ lệ giữa tư bản bất biến (c) và tư bản khả biến (v).<br/>
            <b>Tư bản bất biến (c):</b> mua máy móc, thiết bị, nguyên vật liệu...<br/>
            <b>Tư bản khả biến (v):</b> trả tiền công cho công nhân.<br/>
            <b>Ví dụ:</b> 10 máy + 10 công nhân → 1:1; 20 máy + 10 công nhân → 2:1
          </div>
        </li>
        <li>
          <b>Tăng tích tụ và tập trung tư bản</b><br/>
          Tích tụ: dùng tiền lời để mua thêm máy móc, nguyên liệu, xây nhà xưởng.<br/>
          Tập trung: hợp nhất nhiều tư bản cá biệt (ví dụ: Grab mua lại Uber ở Đông Nam Á).
        </li>
        <li>
          <b>Tăng chênh lệch thu nhập – Bần cùng hóa giai cấp công nhân</b><br/>
          <div className="slide5-note">
            "Quá trình tích lũy tư bản có tính hai mặt: tích lũy sự giàu sang về phía tư sản, tích lũy sự bần cùng về phía công nhân."<br/>
            <b>Bần cùng hóa tương đối:</b> thu nhập công nhân tăng ít hơn tư sản.<br/>
            <b>Bần cùng hóa tuyệt đối:</b> mức sống giảm xuống, thu nhập không đủ sống.
          </div>
        </li>
      </ol>
    </>
  )
} 