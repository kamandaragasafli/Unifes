import { useLanguage } from '../context/LanguageContext'
import './Features.css'

const Features = () => {
  const { t } = useLanguage()

  const features = [
    {
      key: 'quality',
      icon: '🏆'
    },
    {
      key: 'custom',
      icon: '✨'
    },
    {
      key: 'delivery',
      icon: '🚚'
    },
    {
      key: 'durable',
      icon: '💎'
    },
    {
      key: 'support',
      icon: '📞'
    }
  ]

  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">Üstünlüklərimiz</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.key} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{t(`features.${feature.key}.title`)}</h3>
              <p className="feature-desc">{t(`features.${feature.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

