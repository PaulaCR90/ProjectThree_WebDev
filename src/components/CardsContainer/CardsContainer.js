import './CardsContainer.css'
import { response } from '../../utils/MockedResponse'

export const createCardsContainer = (data) => {
  const CardsContainer = document.createElement('section')
  const picsData = (data && data.results) || response.results

  if (!Array.isArray(picsData) || picsData.length === 0) {
    const errorMessage = document.createElement('p')
    errorMessage.textContent = 'No se encontraron imágenes.'
    CardsContainer.appendChild(errorMessage)
    return CardsContainer
  }

  picsData.forEach((picData) => {
    const Card = document.createElement('div')
    Card.className = 'Card'
    const Img = document.createElement('img')
    Img.className = 'CardImg'
    Img.loading = 'lazy'
    Img.src = picData.urls.full
    const h3 = document.createElement('h3')
    h3.textContent = picData.alt_description
    Card.appendChild(Img)
    Card.appendChild(h3)
    CardsContainer.appendChild(Card)
  })

  return CardsContainer
}
