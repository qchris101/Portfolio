import {BrowserRouter, Routes, Route} from 'react-router' 
import './App.css'

import Navbar from './components/navbar/Navbar'
import Social from './components/socials/Social'
import { Button } from "@/components/ui/button"
import HomePage from './routes/HomePage'
import ProjectsPage from './routes/ProjectsPage'
import ResumePage from './routes/ResumePage'
import AboutPage from './routes/AboutPage'

function App() {


  return (
    <> 
    <section className='flex justify-center'>
    <Navbar />
      
      </section> 
        <main className="flex-1 min-h-screen bg-black">
    <Social/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>

    </>
      )
}

export default App
