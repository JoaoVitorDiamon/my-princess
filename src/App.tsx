import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { FinalChapterPage } from './pages/FinalChapterPage'
import { ChapterFourPage } from './pages/ChapterFourPage'
import { ChapterFivePage } from './pages/ChapterFivePage'
import { ChapterThreePage } from './pages/ChapterThreePage'
import { ChapterTwoPage } from './pages/ChapterTwoPage'
import { HomePage } from './pages/HomePage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capitulo-2" element={<ChapterTwoPage />} />
        <Route path="/capitulo-3" element={<ChapterThreePage />} />
        <Route path="/capitulo-4" element={<ChapterFourPage />} />
        <Route path="/capitulo-5" element={<ChapterFivePage />} />
        <Route path="/capitulo-final" element={<FinalChapterPage />} />
      </Routes>
    </>
  )
}

export default App
