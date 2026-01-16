import { useLanguage } from '../context/LanguageContext'
import './Page.css'
import './Contact.css'

const Contact = () => {
  const { t, language } = useLanguage()

  const content = {
    az: {
      title: 'Əlaqə',
      desc: 'Bizimlə əlaqə saxlayın'
    },
    en: {
      title: 'Contact',
      desc: 'Get in touch with us'
    },
    tr: {
      title: 'İletişim',
      desc: 'Bizimle iletişime geçin'
    },
    ru: {
      title: 'Контакты',
      desc: 'Свяжитесь с нами'
    }
  }

  const pageContent = content[language] || content.az

  return (
    <div className="page" style={{'--bg-image': 'url(/images/images (2).jpg)'}}>
      <div className="page-container">
        <h1 className="page-title">{pageContent.title}</h1>
        <div className="page-content">
          <p className="contact-desc">{pageContent.desc}</p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>{t('contact.phone')}:</strong>
              <a href="tel:+994702097789">+994 70 209 77 89</a>
            </div>
            <div className="contact-item">
              <strong>Website:</strong>
              <a href="https://unifes.az" target="_blank" rel="noopener noreferrer">Unifes.az</a>
            </div>
            <div className="contact-item">
              <strong>{t('contact.email')}:</strong>
              <div className="contact-emails">
                <a href="mailto:Info@unifes.az">Info@unifes.az</a>
                <a href="mailto:Samir.Verdiyev@unifes.az">Samir.Verdiyev@unifes.az</a>
                <a href="mailto:Fuad.hesimov@unifes.az">Fuad.hesimov@unifes.az</a>
              </div>
            </div>
            <div className="contact-item">
              <strong>{t('contact.address')}:</strong>
              <span>{t('footer.address')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

