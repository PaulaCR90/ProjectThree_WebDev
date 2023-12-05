import './Footer.css'
import { footer } from '../../utils/footerInfo'

export const createFooter = () => {
  const footer$$ = document.createElement('footer')
  const h3 = document.createElement('h3')
  h3.textContent = 'Created by PaulaCR for '
  const RTC = document.createElement('a')
  RTC.href = 'https://app.thepowermba.com/'
  RTC.textContent = 'Rock{TheCode}!'
  RTC.className = 'RTC'
  h3.appendChild(RTC)
  const ulFooter = document.createElement('ul')
  footer.forEach((element) => {
    const li$$ = document.createElement('li')
    const a$$ = document.createElement('a')
    a$$.href = element.link
    a$$.className = 'footerLinks'
    const img$$ = document.createElement('img')
    img$$.src = element.imgURL
    img$$.className = 'footerImgs'
    a$$.appendChild(img$$)
    ulFooter.appendChild(a$$)
  })

  footer$$.appendChild(h3)
  footer$$.appendChild(ulFooter)
  return footer$$
}
