import TabsSection from '../TabsSection'
import Header from '../Header'
import {Img, Cont, H1, P, MainCont} from './styled'

const NotFound = () => (
  <>
    <Header />
    <MainCont>
      <TabsSection />
      <Cont>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
          className="not-found-img"
        />
        <H1>Page Not Found</H1>
        <P>We are sorry, the page you requested could not be found.</P>
      </Cont>
    </MainCont>
  </>
)
export default NotFound
