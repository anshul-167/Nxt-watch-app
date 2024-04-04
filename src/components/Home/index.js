import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import TabsSection from '../TabsSection'
import HomeVideoItem from '../HomeVideoItem'

import Banner from '../Banner'
import ThemeContext from '../../context/ThemeContext'

import {
  InputCont,
  Input,
  SearchButton,
  HomeCont,
  VideosCont,
  Ul,
  H2,
  P,
  RetryButton,
  Cont,
  Img,
  HomeMainCont,
} from './styled'

class Home extends Component {
  state = {
    videosList: [],
    isLoading: true,
    searchText: '',
    isFailed: false,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    const {searchText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.videos)
    if (response.ok === true) {
      const formattedData = data.videos.map(each => ({
        channel: each.channel,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({
        videosList: formattedData,
        isLoading: false,
        isFailed: false,
      })
    } else {
      this.setState({isFailed: true, isLoading: false})
    }
  }

  onChangeSearch = event => {
    this.setState({searchText: event.target.value})
  }

  onClickSearch = () => {
    this.getHomeVideos()
  }

  onClickRetry = () => {
    this.getHomeVideos()
  }

  renderNoVideosView = () => (
    <Cont>
      <Img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <H2>No Search results found</H2>
      <P>Try different key words or remove search filter</P>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </Cont>
  )

  renderFailedView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble</p>
      <button type="button" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    const token = Cookies.get('jwt_token')
    const {isLoading, isFailed, videosList} = this.state

    if (token === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          const renderMainComponent = () => {
            const {searchText} = this.state
            return (
              <div>
                <InputCont prop={isDark}>
                  <Input
                    type="search"
                    placeholder="Search"
                    value={searchText}
                    onChange={this.onChangeSearch}
                    prop={isDark}
                  />
                  <SearchButton
                    type="button"
                    onClick={this.onClickSearch}
                    data-testid="searchButton"
                    prop={isDark}
                  >
                    <FaSearch />
                  </SearchButton>
                </InputCont>
                <Ul>
                  {videosList.length === 0
                    ? this.renderNoVideosView()
                    : videosList.map(each => (
                        <HomeVideoItem videoDetails={each} key={each.id} />
                      ))}
                </Ul>
              </div>
            )
          }

          let mainContent

          if (isFailed) {
            mainContent = this.renderFailedView()
          } else if (isLoading) {
            mainContent = this.renderLoader()
          } else {
            mainContent = renderMainComponent()
          }

          return (
            <HomeMainCont prop={isDark} data-testid="home">
              <Header />
              <HomeCont>
                <TabsSection />
                <VideosCont>
                  <Banner />
                  {mainContent}
                </VideosCont>
              </HomeCont>
            </HomeMainCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
