import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-copyright">{t('footer.copyright')}</p>
          </div>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <strong>{t('contact.phone')}:</strong>
              <a href="tel:+994702097789" className="footer-link">+994 70 209 77 89</a>
            </div>
            <div className="footer-contact-item">
              <strong>Website:</strong>
              <a href="https://unifes.az" target="_blank" rel="noopener noreferrer" className="footer-link">Unifes.az</a>
            </div>
            <div className="footer-contact-item">
              <strong>{t('contact.email')}:</strong>
              <div className="footer-emails">
                <a href="mailto:Info@unifes.az" className="footer-link">info@unifes.az</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <strong>{t('contact.address')}:</strong>
              <span className="footer-address">{t('footer.address')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

