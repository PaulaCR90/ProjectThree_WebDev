import './Button.css'

export const createButton = ({
  texto = 'Add a text here',
  bgColor = 'white',
  fontColor = 'black'
}) => {
  return `<button class="main-button" style="background-color: ${bgColor}; color: ${fontColor}">${texto}</button>`
}
