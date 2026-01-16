import { useLanguage } from '../context/LanguageContext'
import './Page.css'

const Partners = () => {
  const { t, language } = useLanguage()

  const content = {
    az: {
      title: 'Partnyorlarımız',
      desc: 'Etibarlı partnyorlarımızla birlikdə müştərilərimizə ən yaxşı xidməti təqdim edirik.'
    },
    en: {
      title: 'Our Partners',
      desc: 'Together with our trusted partners, we provide the best service to our customers.'
    },
    tr: {
      title: 'Ortaklarımız',
      desc: 'Güvenilir ortaklarımızla birlikte müşterilerimize en iyi hizmeti sunuyoruz.'
    },
    ru: {
      title: 'Наши Партнеры',
      desc: 'Вместе с нашими надежными партнерами мы предоставляем лучший сервис нашим клиентам.'
    }
  }

  const pageContent = content[language] || content.az

  return (
    <div className="page" style={{'--bg-image': 'url(/images/hac_photobyiwanbaan4copy.jpg)'}}>
      <div className="page-container">
        <h1 className="page-title">{pageContent.title}</h1>
        <div className="page-content">
          <p>{pageContent.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Partners

