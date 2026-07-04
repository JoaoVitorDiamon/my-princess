import { Route, Routes } from 'react-router-dom'
import { FinalChapterPage } from './pages/FinalChapterPage'
import { ChapterFourPage } from './pages/ChapterFourPage'
import { ChapterFivePage } from './pages/ChapterFivePage'
import { ChapterThreePage } from './pages/ChapterThreePage'
import { ChapterTwoPage } from './pages/ChapterTwoPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capitulo-2" element={<ChapterTwoPage />} />
      <Route path="/capitulo-3" element={<ChapterThreePage />} />
      <Route path="/capitulo-4" element={<ChapterFourPage />} />
      <Route path="/capitulo-5" element={<ChapterFivePage />} />
      <Route path="/capitulo-final" element={<FinalChapterPage />} />
    </Routes>
  )
}

export default App
