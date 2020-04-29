import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
  Box,
  Snackbar
} from '@material-ui/core'
import {
  LockOutlined as LockOutlinedIcon,
  Facebook as FacebookIcon
} from '@material-ui/icons'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import PropTypes from 'prop-types'

import Style from './Style'

const Login = ({ history }) => {
  const classes = Style()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [popup, setPopup] = useState(false)
  const usernameRef = useRef('')

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSignIn = () => {
    if (username !== '' && password !== '') {
      window.localStorage.setItem('id', username)
      history.push('/')
    } else {
      setPopup(true)
    }
  }

  const onFacebookCallback = response => {
    window.localStorage.setItem('id', response.email)
    history.push('/')
  }

  const onGoogleLogin = response => {
    window.localStorage.setItem('id', response.profileObj.email)
    history.push('/')
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box my={4}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              ref={usernameRef}
              value={username}
              onChange={event => setUsername(event.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
            <Grid
              container
              justify="space-between"
              alignItems="center"
              className="classes.grid"
            >
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonSignIn}
                onClick={onSignIn}
              >
                Sign In
              </Button>
            </Grid>

            <FacebookLogin
              appId="531301940840927"
              fields="name,email,picture"
              icon={<FacebookIcon className={classes.facebookIcon} />}
              cssClass={classes.buttonFacebook}
              callback={onFacebookCallback}
            />

            <GoogleLogin
              clientId="451742467118-hkaaana9gkuf0kvr4ru7gt4vpk0kg070.apps.googleusercontent.com"
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={onGoogleLogin}
              onFailure={onGoogleLogin}
              cookiePolicy="single_host_origin"
              className={classes.buttonGoogle}
            />
          </form>
        </div>
      </Box>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        onClose={() => setPopup(false)}
        open={popup}
        autoHideDuration={2000}
        message="Please check your Username and Password!"
      />
    </Container>
  )
}

Login.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(Login)
