import {useState} from 'react'
import {TiDelete} from 'react-icons/ti'
import {MainCont, P, Img, DelButton, GetButton} from './styled'

const Banner = () => {
  const [showPoster, setShowPoster] = useState(true)

  const onClickDelButton = () => {
    setShowPoster(false)
  }

  return showPoster ? (
    <MainCont data-testid="banner">
      <div>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <P>Buy Nxt Watch Premium prepaid plans with UPI</P>
        <GetButton type="button">GET IT NOW</GetButton>
      </div>
      <DelButton type="button" onClick={onClickDelButton} data-testid="close">
        <TiDelete />
      </DelButton>
    </MainCont>
  ) : null
}
export default Banner
