import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {withRouter, Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  Nav,
  Logo,
  ThemeButton,
  LogoutButton,
  Profile,
  ButtonsCont,
} from './styled'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, onChangeTheme} = value
      const onClickMoon = () => onChangeTheme()

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const ReactPopUp = () => (
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <LogoutButton type="button" prop={isDark}>
                Logout
              </LogoutButton>
            }
          >
            {close => (
              <>
                <div>
                  <p>Are you sure, you want to logout</p>
                </div>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  Cancel
                </button>
                <LogoutButton
                  type="button"
                  onClick={onClickLogout}
                  prop={isDark}
                >
                  Confirm
                </LogoutButton>
              </>
            )}
          </Popup>
        </div>
      )
      return (
        <Nav prop={isDark}>
          <Link to="/">
            <Logo
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <ButtonsCont>
            <ThemeButton
              type="button"
              onClick={onClickMoon}
              data-testid="theme"
            >
              {isDark ? (
                <FiSun size={20} style={{color: '#f9f9f9'}} />
              ) : (
                <FaMoon size={20} />
              )}
            </ThemeButton>
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <ReactPopUp />
          </ButtonsCont>
        </Nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
