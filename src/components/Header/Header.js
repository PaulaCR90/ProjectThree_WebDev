import { createComputerNavBar } from '../NavBar/NavBar'
import './Header.css'

export const createHeader = () => {
  const Header = document.createElement('header')
  const logoContainer = document.createElement('figure')
  const logoImg = document.createElement('img')
  logoContainer.className = 'logoContainer'
  logoImg.className = 'logoImg'
  logoImg.src = './assets/pinterest.png'
  logoContainer.appendChild(logoImg)
  Header.appendChild(logoContainer)
  const Nav = createComputerNavBar()
  Header.appendChild(Nav)
  return Header
}
