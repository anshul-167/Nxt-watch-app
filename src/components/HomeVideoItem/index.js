import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  Li,
  MainImg,
  ChannelImg,
  SubCont,
  Title,
  ChannelName,
  Time,
} from './styled'
import './index.css'

const HomeVideoItem = props => {
  const {videoDetails} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} =
    videoDetails

  const formattedTime = formatDistanceToNow(new Date(publishedAt))

  return (
    <Li>
      <Link to={`/videos/${id}`}>
        <MainImg src={thumbnailUrl} alt="video thumbnail" />
      </Link>
      <SubCont>
        <ChannelImg src={channel.profile_image_url} alt="channel logo" />
        <div>
          <Title>{title}</Title>
          <ChannelName>{channel.name}</ChannelName>
          <div style={{display: 'flex'}}>
            <Time style={{marginRight: '10px'}}>{`${viewCount} views`}</Time>
            <Time>||</Time>
            <Time style={{marginLeft: '10px'}}>{formattedTime}</Time>
          </div>
        </div>
      </SubCont>
    </Li>
  )
}

export default HomeVideoItem
