import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainGamePage from './game/component/MainGamePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const publicRoutes = [
  {
    path: '/game',
    element: <MainGamePage />,
  },
]

function NotFoundPage() {
  return <div>404 Not Found</div>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
