import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import PublicPage from './pages/PublicPage'
import PrivatePage from './pages/PrivatePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/private" element={<PrivatePage />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App