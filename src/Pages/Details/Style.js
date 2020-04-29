import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    padding: '20px 20px'
  },

  loadingScreen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
  },

  productCard: {
    padding: 0,
    marginBottom: 30
  },
  productCardContent: {
    padding: '12px 10px !important'
  },
  productImage: {
    height: 200
  },
  shareIcon: {
    alignSelf: 'flex-end'
  },
  price: {
    marginBottom: 20,
    color: 'red',
    fontWeight: 'bold'
  }
}))

export default useStyles
