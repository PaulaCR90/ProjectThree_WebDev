import { createCardsContainer } from './src/components/CardsContainer/CardsContainer'
import { createFooter } from './src/components/Footer/Footer'
import { createHeader } from './src/components/Header/Header'
import './style.css'
const divApp = document.querySelector('#app')

const Header = createHeader()
const article = document.createElement('article')
article.className = 'CardsArticle'
divApp.appendChild(Header)
divApp.appendChild(article)

const initialSection = createCardsContainer()
article.appendChild(initialSection)

const CallApi = (inputValue) => {
  console.log(inputValue)
  const accessKey = 'lx4jQH-bEuI1_W8HYzH3Aazgx1ehhTHqjJTVuJYtsz4'
  const API_URL = `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=${accessKey}`

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const updatedSection = createCardsContainer(data)
      article.removeChild(article.lastChild)
      article.appendChild(updatedSection)
    })
    .catch((error) => {
      console.log('Error al obtener los datos de la API', error)
    })
}

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    const inputValue = event.target.value
    CallApi(event.target.value) // Llama a tu función CallApi cuando se presiona Enter
  }
}

const input$$ = document.querySelector('input')
input$$.addEventListener('keydown', handleKeyPress)

const Footer = createFooter()
divApp.appendChild(Footer)
