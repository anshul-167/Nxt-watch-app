import './App.css'
import {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import ProtectedRoute from './components/ProtectedRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'
import VideosDetailedPage from './components/VideosDetailedPage'

// Replace your code here
class App extends Component {
  state = {isDark: false}

  onChangeTheme = () => {
    console.log('theme changed')
    this.setState(preState => ({isDark: !preState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <ThemeContext.Provider
        value={{isDark, onChangeTheme: this.onChangeTheme}}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideosDetailedPage}
          />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default withRouter(App)
