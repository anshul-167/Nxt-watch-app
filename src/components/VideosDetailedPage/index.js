import {Component} from 'react'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd, MdPlaylistAddCheck} from 'react-icons/md'

import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TabsSection from '../TabsSection'
import {Cont, LikeButton, SaveButton, SavedButton} from './styled'

class VideosDetailedPage extends Component {
  state = {
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
    savedVideosList: [],
    isSaved: false,
    isLoading: true,
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  onClickLike = () => {
    const {isLiked} = this.state
    this.setState({isLiked: true, isDisliked: false})
    console.log(isLiked)
  }

  onClickDislike = () => {
    this.setState({isLiked: false, isDisliked: true})
  }

  onClickSave = () => {
    const {videoDetails} = this.state

    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
      isSaved: true,
    }))
  }

  onClickUnsave = () => {
    const {videoDetails} = this.state

    this.setState(prevState => ({
      savedVideosList: [
        ...prevState.savedVideosList.filter(
          each => each.id !== videoDetails.id,
        ),
      ],
      isSaved: false,
    }))
  }

  getVideosDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const formattedData = each => ({
        id: each.id,
        channel: each.channel,
        description: each.description,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        videoUrl: each.video_url,
        viewCount: each.view_count,
      })

      const formattedVideoDetails = formattedData(data.video_details)
      this.setState({videoDetails: formattedVideoDetails, isLoading: false})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderDetailedVideoSection = () => {
    const {videoDetails, isLiked, isDisliked, isSaved, isLoading} = this.state
    return isLoading ? (
      this.renderLoader()
    ) : (
      <div>
        <ReactPlayer url={videoDetails.videoUrl} />
        <p>{videoDetails.title}</p>
        <div>
          <div>
            <p>{videoDetails.viewCount}</p>
            <p>{videoDetails.publishedAt}</p>
          </div>
          <div>
            <LikeButton type="button" onClick={this.onClickLike} Prop={isLiked}>
              <AiOutlineLike /> Like
            </LikeButton>
            <LikeButton
              type="button"
              onClick={this.onClickDislike}
              Prop={isDisliked}
            >
              <AiOutlineDislike /> Dislike
            </LikeButton>

            {isSaved ? (
              <SavedButton type="button" onClick={this.onClickUnsave}>
                <MdPlaylistAddCheck /> Saved
              </SavedButton>
            ) : (
              <SaveButton type="button" onClick={this.onClickSave}>
                {' '}
                <MdPlaylistAdd /> Save
              </SaveButton>
            )}
          </div>
        </div>
        <hr />
        <div>
          <img
            src={videoDetails.channel?.profile_image_url}
            alt="channel logo"
          />
          <div>
            <p>{videoDetails.channel?.name}</p>
            <p>{`${videoDetails.channel?.subscriber_count} subscribers`}</p>
          </div>
        </div>
        <p>{videoDetails.description}</p>
      </div>
    )
  }

  render() {
    const {savedVideosList} = this.state

    console.log(savedVideosList)
    return (
      <div>
        <Header />
        <Cont>
          <TabsSection />
          {this.renderDetailedVideoSection()}
        </Cont>
      </div>
    )
  }
}
export default VideosDetailedPage
