import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    padding: 0
  },

  noData: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500
  },

  productCard: {
    padding: 0,
    marginBottom: 15
  },
  productCardDetail: {
    display: 'flex'
  },
  productCardContent: {
    paddingBottom: '16px !important'
  },
  productCardImage: {
    minWidth: 100
  },
  shareIcon: {
    alignSelf: 'flex-end'
  },
  productTitle: {
    fontSize: 15,
    marginBottom: 10
  },
  productPrice: {
    // marginBottom: 20,
    color: 'red',
    fontWeight: 'bold'
  }
}))

export default useStyles
