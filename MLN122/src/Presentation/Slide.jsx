import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function Slide({ title, image, content, fade, anim, children }) {
  // Nếu children có class slide5-bg-container thì không bọc presentation-card
  const isSlide5Bg = children && children.type && children.props && children.props.className && children.props.className.includes('slide5-bg-container');
  if (isSlide5Bg) {
    return children;
  }
  return (
    <div className={`presentation-card desktop ${anim || ''}`} style={{position:'relative'}}>
      <div className="slide-content-wrapper">
        <div className="slide-title">{title}</div>
        {image && (
          <div className="slide-image"><img src={image} alt="minh họa" /></div>
        )}
        <div className="slide-content">{content}</div>
        {children}
      </div>
    </div>
  )
}

export default Slide 