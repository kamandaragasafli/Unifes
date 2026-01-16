import { useLanguage } from '../context/LanguageContext'
import './Page.css'

const About = () => {
  const { t, language } = useLanguage()

  const content = {
    az: {
      title: 'Haqqımızda',
      desc: 'Unifes olaraq, yüksək keyfiyyətli məhsullar və xidmətlər təqdim edirik. Müştərilərimizin ehtiyaclarına uyğun fərdi həllər yaradaraq, hər bir layihəni unikal edirik.'
    },
    en: {
      title: 'About Us',
      desc: 'As Unifes, we offer high-quality products and services. We create custom solutions tailored to our customers\' needs, making each project unique.'
    },
    tr: {
      title: 'Hakkımızda',
      desc: 'Unifes olarak, yüksek kaliteli ürünler ve hizmetler sunuyoruz. Müşterilerimizin ihtiyaçlarına uygun özel çözümler oluşturarak her projeyi benzersiz kılıyoruz.'
    },
    ru: {
      title: 'О нас',
      desc: 'Как Unifes, мы предлагаем высококачественную продукцию и услуги. Создавая индивидуальные решения, соответствующие потребностям наших клиентов, мы делаем каждый проект уникальным.'
    }
  }

  const pageContent = content[language] || content.az

  return (
    <div className="page" style={{'--bg-image': 'url(/images/baku-az-what-to-see.jpg)'}}>
      <div className="page-container">
        <h1 className="page-title">{pageContent.title}</h1>
        <div className="page-content">
          <p>{pageContent.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default About

