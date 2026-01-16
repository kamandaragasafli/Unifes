import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Navbar.css'

const Navbar = () => {
  const { t, language, changeLanguage } = useLanguage()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const languages = ['az', 'en', 'tr', 'ru']
  const languageRef = useRef(null)

  const isActive = (path) => {
    return location.pathname === path
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false)
      }
    }

    if (isLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageOpen])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="Unifes Logo" className="navbar-logo-img" />
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.home')}
          </Link>
          <Link 
            to="/haqqimizda" 
            className={`navbar-link ${isActive('/haqqimizda') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.about')}
          </Link>
          <Link 
            to="/mehsullar" 
            className={`navbar-link ${isActive('/mehsullar') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.products')}
          </Link>
          <Link 
            to="/partnyorlar" 
            className={`navbar-link ${isActive('/partnyorlar') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.partners')}
          </Link>
          <Link 
            to="/elaqe" 
            className={`navbar-link ${isActive('/elaqe') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.contact')}
          </Link>
        </div>

        <div className="navbar-languages" ref={languageRef}>
          <button 
            className="language-toggle"
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            aria-label="Dil seç"
          >
            <span className="language-icon">🌐</span>
            <span className="language-current">{language.toUpperCase()}</span>
          </button>
          {isLanguageOpen && (
            <div className="language-dropdown">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className={`language-option ${language === lang ? 'active' : ''}`}
                  onClick={() => {
                    changeLanguage(lang)
                    setIsLanguageOpen(false)
                  }}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

