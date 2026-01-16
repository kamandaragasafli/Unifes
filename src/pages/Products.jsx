import { useLanguage } from '../context/LanguageContext'
import './Page.css'

const Products = () => {
  const { t, language } = useLanguage()

  const content = {
    az: {
      title: 'Məhsullar',
      desc: 'Geniş məhsul çeşidimizlə layihələriniz üçün ən uyğun izolyasiya materiallarını təqdim edirik.'
    },
    en: {
      title: 'Products',
      desc: 'With our wide range of products, we offer the most suitable insulation materials for your projects.'
    },
    tr: {
      title: 'Ürünler',
      desc: 'Geniş ürün yelpazemizle projeleriniz için en uygun izolasyon malzemelerini sunuyoruz.'
    },
    ru: {
      title: 'Продукция',
      desc: 'С нашим широким ассортиментом продукции мы предлагаем наиболее подходящие изоляционные материалы для ваших проектов.'
    }
  }

  const pageContent = content[language] || content.az

  return (
    <div className="page" style={{'--bg-image': 'url(/images/image5.webp)'}}>
      <div className="page-container">
        <h1 className="page-title">{pageContent.title}</h1>
        <div className="page-content">
          <p>{pageContent.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Products

