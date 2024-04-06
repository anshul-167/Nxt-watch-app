import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  MainCont,
  Card,
  Img,
  Label,
  Input,
  Checkbox,
  Button,
  InputCont,
  CheckboxCont,
  CheckboxLabel,
  P,
} from './styled'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onClickLogin = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showPassword, showError, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <MainCont>
        <Card>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <form onSubmit={this.onClickLogin}>
            <InputCont>
              <Label htmlFor="name">USERNAME</Label>
              <Input
                id="name"
                type="text"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </InputCont>
            <InputCont>
              <Label htmlFor="password">PASSWORD</Label>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </InputCont>
            <CheckboxCont>
              <Checkbox
                id="checkbox"
                type="checkbox"
                onChange={this.toggleShowPassword}
              />
              <CheckboxLabel htmlFor="checkbox">Show Password</CheckboxLabel>
            </CheckboxCont>
            <Button type="submit">Login</Button>
            {showError ? <P>{`*${errorMsg}`}</P> : null}
          </form>
        </Card>
      </MainCont>
    )
  }
}
export default Login
