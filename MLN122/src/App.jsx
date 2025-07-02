import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GamePage from './game/GamePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PresentationPage from './Presentation/PresentationPage'
const publicRoutes = [
  {
    path: '/game',
    element: <GamePage />,
  },
]

function NotFoundPage() {
  return <div>404 Not Found</div>
}


function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <Router>
      <Routes>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/" element={<PresentationPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/presentation" element={<PresentationPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App