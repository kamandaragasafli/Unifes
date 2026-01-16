import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import AnimatedRoutes from './components/AnimatedRoutes'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { LanguageProvider } from './context/LanguageContext'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App

