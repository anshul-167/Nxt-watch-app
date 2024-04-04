import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import TabsSection from '../TabsSection'
import HomeVideoItem from '../HomeVideoItem'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeCont,
  VideosCont,
  Ul,
  Img,
  HomeMainCont,
  Cont,
  H2,
  P,
  RetryButton,
} from './styled'

class TrendingRoute extends Component {
  state = {videosList: [], isLoading: true, isFailed: false}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      const formattedData = data.videos.map(each => ({
        channel: each.channel,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({videosList: formattedData, isLoading: false})
    } else {
      console.log('c')
      this.setState({isFailed: true})
    }
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  renderFailedView = () => (
    <Cont>
      <Img
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
                    <HomeVideoItem videoDetails={each} key={each.id} />
                  ))}
                </Ul>
              </div>
            )
          }

          let contentToRender

          if (isFailed) {
            contentToRender = this.renderFailedView()
          } else if (isLoading) {
            contentToRender = this.renderLoader()
          } else {
            contentToRender = renderMainComponent()
          }

          return (
            <HomeMainCont prop={isDark} data-testid="trending">
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
                    <HiFire style={{marginLeft: '5px', fontSize: '35px'}} />
                    <h2 style={{marginLeft: '5px', fontSize: '35px'}}>
                      Trending Videos
                    </h2>
                  </div>
                  {contentToRender}
                </VideosCont>
              </HomeCont>
            </HomeMainCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingRoute
