import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: '50px'
  },
  buttonSignIn: {
    backgroundColor: '#5abcc2'
  },
  buttonFacebook: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3578E5',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: 5,
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '100%',
    marginTop: 25,
    boxShadow:
      'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px'
  },
  buttonGoogle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px !important',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '100%',
    marginTop: 25,
    boxShadow:
      'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px'
  },
  facebookIcon: {
    marginRight: 15
  }
}))

export default useStyles
