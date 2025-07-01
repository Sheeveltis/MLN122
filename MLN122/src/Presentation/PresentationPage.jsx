import React, { useState } from 'react'
import './PresentationPage.css'
import Slide from './Slide'
import ThemeToggleButton from './ThemeToggleButton'
import SlideControls from './SlideControls'
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const slides = [
   <Slide2 key={0} />, <Slide3 key={1} />, <Slide4 key={2} />, <Slide5 key={3} />,<Slide1 key={4} />, <Slide6 key={5} />, <Slide7 key={6} />
]

function PresentationPage({ theme, toggleTheme }) {
  const [current, setCurrent] = useState(0)
  const [anim, setAnim] = useState('slide-in-right')
  const isDark = theme === 'dark'
  const [lastIdx, setLastIdx] = useState(0)

  // Hiệu ứng chuyển slide lướt trang
  const goToSlide = (idx) => {
    if (idx === current) return
    setLastIdx(current)
    if (idx > current) {
      setAnim('slide-out-left')
      setTimeout(() => {
        setCurrent(idx)
        setAnim('slide-in-right')
      }, 300)
    } else {
      setAnim('slide-out-right')
      setTimeout(() => {
        setCurrent(idx)
        setAnim('slide-in-left')
      }, 300)
    }
  }

  return (
    <div className={`presentation-container ${isDark ? 'dark' : 'light'}`}>
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} isDark={isDark} className="theme-toggle-btn" />
      {/* Nút chuyển trang bên trái */}
      {current > 0 && (
        <button
          className="slide-nav-btn left"
          onClick={() => goToSlide(Math.max(0, current - 1))}
        >
          <ArrowLeft size={28} />
        </button>
      )}
      {/* Nút chuyển trang bên phải */}
      {current < slides.length - 1 && (
        <button
          className="slide-nav-btn right"
          onClick={() => goToSlide(Math.min(slides.length - 1, current + 1))}
        >
          <ArrowRight size={28} />
        </button>
      )}
      <Slide
        fade={false}
        anim={anim}
      >
        {slides[current]}
      </Slide>
      <SlideControls
        current={current}
        total={slides.length}
        goToPrev={() => goToSlide(Math.max(0, current - 1))}
        goToNext={() => goToSlide(Math.min(slides.length - 1, current + 1))}
        disablePrev={current === 0}
        disableNext={current === slides.length - 1}
      />
    </div>
  )
}

export default PresentationPage 