import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import {
  cloneDeep,
  findIndex,
  filter,
  includes,
  lowerCase,
  map,
  isEmpty
} from 'lodash'
import {
  Container,
  TextField,
  InputAdornment,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
  CircularProgress
} from '@material-ui/core'
import {
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  FavoriteOutlined as FavoriteOutlinedIcon,
  Search as SearchIcon
} from '@material-ui/icons'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { updateProduct } from '../../redux/actions'

import Style from './Style'

const Home = ({ history }) => {
  const classes = Style()
  const dispatch = useDispatch()

  const [dataCategory, setDataCategory] = useState([])

  const [isFetchingData, setIsFetchingData] = useState(false)
  const products = useSelector(state => state.products)

  const [filteredProduct, setFilteredProduct] = useState([])
  const [inputSearchValue, setInputSearchValue] = useState('')

  const [bottomNavbar, setBottomNavbar] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      setIsFetchingData(true)

      const response = await Axios.get(
        'https://private-4639ce-ecommerce56.apiary-mock.com/home'
      )
      setDataCategory(response.data[0].data.category)
      dispatch(
        updateProduct(
          map(response.data[0].data.productPromo, product => ({
            ...product,
            purchased: false
          }))
        )
      )

      setIsFetchingData(false)
    }

    if (isEmpty(products)) fetchData()
  }, [])

  const onInputSearch = event => {
    const searchkeyword = event.target.value
    setInputSearchValue(searchkeyword)

    if (searchkeyword !== '') {
      const items = cloneDeep(products)
      setFilteredProduct(
        filter(items, item =>
          includes(lowerCase(item.title), lowerCase(searchkeyword))
        )
      )
    } else setFilteredProduct(products)
  }

  const onClickLoveIcon = (event, product) => {
    event.stopPropagation()

    const items = cloneDeep(products)
    const matchedIndex = findIndex(items, { id: product.id })
    items[matchedIndex].loved = items[matchedIndex].loved === 1 ? 0 : 1

    dispatch(updateProduct(items))
  }

  return (
    <>
      {isFetchingData ? (
        <Grid className={classes.loadingScreen}>
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <Container component="main" maxWidth="xs" className={classes.root}>
            <Grid
              container
              alignItems="center"
              justify="flex-start"
              className={classes.navbar}
            >
              <FavoriteBorderOutlinedIcon
                fontSize="large"
                className={classes.whislistIcon}
              />
              <TextField
                placeholder="Search here..."
                size="small"
                variant="outlined"
                className={classes.textFieldSearch}
                InputProps={{
                  className: classes.inputSearch,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
                value={inputSearchValue}
                onChange={onInputSearch}
              />
            </Grid>
            <GridList
              className={classes.categoryList}
              cols={4.5}
              cellHeight={100}
            >
              {dataCategory.map(category => (
                <GridListTile key={category.id}>
                  <img
                    src={category.imageUrl}
                    alt="img"
                    className={classes.categoryImage}
                  />
                  <GridListTileBar
                    title={category.name}
                    classes={{
                      root: classes.categoryTitleWrapper,
                      title: classes.categoryTitle
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
            {(inputSearchValue === '' ? products : filteredProduct).map(
              product => (
                <Card
                  key={product.id}
                  className={classes.productCard}
                  onClick={() => history.push(`detail/${product.id}`)}
                >
                  <CardMedia
                    className={classes.productImage}
                    image={product.imageUrl}
                    title="img"
                  />
                  <CardContent className={classes.productcardContent}>
                    <Grid
                      container
                      alignItems="flex-end"
                      justify="space-between"
                    >
                      <Typography gutterBottom variant="h6" component="h6">
                        {product.title}
                      </Typography>
                      <IconButton
                        onClick={event => onClickLoveIcon(event, product)}
                      >
                        {product.loved ? (
                          <FavoriteOutlinedIcon color="error" />
                        ) : (
                          <FavoriteBorderOutlinedIcon />
                        )}
                      </IconButton>
                    </Grid>
                  </CardContent>
                </Card>
              )
            )}
          </Container>

          <BottomNavigation
            value={bottomNavbar}
            onChange={(event, newValue) => {
              setBottomNavbar(newValue)
            }}
            showLabels
            className={classes.bottomNavigationStyle}
          >
            <BottomNavigationAction label="Home" />
            <BottomNavigationAction label="Feed" />
            <BottomNavigationAction label="Cart" />
            <BottomNavigationAction
              label="Profile"
              onClick={() => history.push('/purchased')}
            />
          </BottomNavigation>
        </>
      )}
    </>
  )
}

Home.propTypes = {
  history: PropTypes.object.isRequired
}

export default Home
