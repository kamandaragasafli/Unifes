import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  const slogan = t('hero.slogan')

  const slides = [
    {
      image: '/images/baku-az-what-to-see.jpg',
      alt: 'Bakı şəhərinin mənzərəsi - tarixi və müasir memarlıq'
    },
    {
      image: '/images/image5.webp',
      alt: 'Bakı şəhərinin mənzərəsi - tarixi və müasir memarlıq'
    },
    {
      image: '/images/hac_photobyiwanbaan4copy.jpg',
      alt: 'Müasir heykəltəraşlıq xarakterli bina'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    setDisplayedText('')
    setIsTyping(true)
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex < slogan.length) {
        setDisplayedText(slogan.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [slogan])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="hero">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <h1 className="hero-slogan">
          {displayedText}
          {isTyping && <span className="typing-cursor">|</span>}
        </h1>
      </div>

      <button className="carousel-btn carousel-btn-prev" onClick={goToPrevious} aria-label="Əvvəlki">
        ‹
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={goToNext} aria-label="Növbəti">
        ›
      </button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero

