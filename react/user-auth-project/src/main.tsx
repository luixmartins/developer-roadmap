import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'

import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='home' element={<App />} />

    </Routes>
  </BrowserRouter>
)
