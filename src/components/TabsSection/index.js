import {Component} from 'react'
import {Link} from 'react-router-dom'
import {MdHome, MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/ThemeContext'

import {
  LeftCont,
  LinksCont,
  LinkText,
  LinkButton,
  LeftHead,
  FbLogo,
  LeftPara,
  BottomCont,
} from './styled'

const tabsList = [
  {id: 1, displayText: 'Home'},
  {id: 2, displayText: 'Trending'},
  {id: 3, displayText: 'Gaming'},
  {id: 4, displayText: 'Saved videos'},
]

class TabsSection extends Component {
  state = {selectedTab: tabsList[0]}

  onClickTab = id => {
    const tab = tabsList.find(each => each.id === id)
    this.setState({selectedTab: tab})
    console.log(tab)
  }

  render() {
    const {selectedTab} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LeftCont prop={isDark}>
              <>
                <LinksCont>
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <LinkButton
                      onClick={() => this.onClickTab(1)}
                      prop={selectedTab.id === 1}
                      darkProp={isDark}
                    >
                      <MdHome />
                      <LinkText prop={selectedTab.id === 1} darkProp={isDark}>
                        Home
                      </LinkText>
                    </LinkButton>
                  </Link>
                  <Link to="/trending" style={{textDecoration: 'none'}}>
                    <LinkButton
                      onClick={() => this.onClickTab(2)}
                      prop={selectedTab.id === 2}
                      darkProp={isDark}
                    >
                      <HiFire />
                      <LinkText prop={selectedTab.id === 2} darkProp={isDark}>
                        Trending
                      </LinkText>
                    </LinkButton>
                  </Link>
                  <Link to="/gaming" style={{textDecoration: 'none'}}>
                    <LinkButton
                      onClick={() => this.onClickTab(3)}
                      prop={selectedTab.id === 3}
                      darkProp={isDark}
                    >
                      <SiYoutubegaming />
                      <LinkText prop={selectedTab.id === 3} darkProp={isDark}>
                        Gaming
                      </LinkText>
                    </LinkButton>
                  </Link>
                  <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                    <LinkButton
                      onClick={() => this.onClickTab(4)}
                      prop={selectedTab.id === 4}
                      darkProp={isDark}
                    >
                      <MdPlaylistAdd />
                      <LinkText prop={selectedTab.id === 4} darkProp={isDark}>
                        Saved Videos
                      </LinkText>
                    </LinkButton>
                  </Link>
                </LinksCont>
                <BottomCont>
                  <LeftHead darkProp={isDark}>CONTACT US</LeftHead>
                  <div>
                    <FbLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <FbLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <FbLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </div>
                  <LeftPara darkProp={isDark}>
                    Enjoy! Now to see your channels and recommendations!
                  </LeftPara>
                </BottomCont>
              </>
            </LeftCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default TabsSection
