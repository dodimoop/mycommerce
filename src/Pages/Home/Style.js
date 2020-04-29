import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    padding: '0 20px',
    marginBottom: 70
  },

  loadingScreen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
  },

  navbar: {
    position: 'fixed',
    padding: 20,
    zIndex: 1301,
    top: 0,
    left: 0,
    backgroundColor: 'white'
  },
  textFieldSearch: {
    width: 'calc(100% - 58px)'
  },
  whislistIcon: {
    marginRight: 20
  },
  inputSearch: {
    borderRadius: 50
  },
  searchBox: {
    top: 80
  },

  categoryList: {
    marginTop: '85px !important',
    flexWrap: 'nowrap'
  },
  categoryImage: {
    width: 50,
    height: 50
  },
  categoryTitleWrapper: {
    backgroundColor: 'transparent'
  },
  categoryTitle: {
    textAlign: 'center',
    color: '#000',
    fontSize: 13,
    whiteSpace: 'normal',
    lineHeight: '15px'
  },

  productCard: {
    padding: 0,
    marginBottom: 30
  },
  productcardContent: {
    padding: '12px 10px !important'
  },
  productImage: {
    height: 200
  },

  bottomNavigationStyle: {
    display: 'flex',
    bottom: 0,
    width: '100%',
    left: '0 !important',
    zIndex: 2,
    position: 'fixed',
    backgroundColor: 'white'
  }
}))

export default useStyles
