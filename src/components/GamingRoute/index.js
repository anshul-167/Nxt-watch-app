import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import TabsSection from '../TabsSection'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeCont,
  VideosCont,
  Ul,
  Img,
  Li,
  ErrorImg,
  Cont,
  H2,
  P,
  RetryButton,
  HomeMainCont,
} from './styled'

class GamingRoute extends Component {
  state = {videosList: [], isLoading: true, isFailed: false}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.videos)
    if (response.ok === true) {
      const formattedData = data.videos.map(each => ({
        id: each.id,

        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({videosList: formattedData, isLoading: false})
    } else {
      this.setState({isFailed: true})
    }
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  renderFailedView = () => (
    <Cont>
      <ErrorImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <H2>Oops! Something Went Wrong</H2>
      <P>We are having some trouble</P>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </Cont>
  )

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    const token = Cookies.get('jwt_token')
    const {isLoading, isFailed} = this.state

    if (token === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const renderMainComponent = () => {
            const {videosList} = this.state
            return (
              <div>
                <Ul>
                  {videosList.map(each => (
                    <Li key={each.id}>
                      <Link to={`/videos/${each.id}`}>
                        <Img src={each.thumbnailUrl} alt="thumbnail" />
                        <p>{each.title}</p>
                        <p>{`${each.viewCount} Watching Worldwide`}</p>
                      </Link>
                    </Li>
                  ))}
                </Ul>
              </div>
            )
          }

          let componentToRender

          if (isFailed) {
            componentToRender = this.renderFailedView()
          } else if (isLoading) {
            componentToRender = this.renderLoader()
          } else {
            componentToRender = renderMainComponent()
          }

          return (
            <HomeMainCont prop={isDark} data-testid="gaming">
              <Header />
              <HomeCont>
                <TabsSection />
                <VideosCont>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      margin: 'auto',
                    }}
                  >
                    <SiYoutubegaming
                      style={{marginLeft: '5px', fontSize: '35px'}}
                    />
                    <h2 style={{marginLeft: '5px', fontSize: '35px'}}>
                      Gaming Videos
                    </h2>
                  </div>
                  {componentToRender}
                </VideosCont>
              </HomeCont>
            </HomeMainCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingRoute
