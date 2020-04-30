import React, { useState, useEffect } from 'react'
import {
  Container,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  IconButton,
  CircularProgress,
  Button,
  Snackbar
} from '@material-ui/core'
import {
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  FavoriteOutlined as FavoriteOutlinedIcon,
  ArrowBack as ArrowBackIcon,
  Share as ShareIcon
} from '@material-ui/icons'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { find, cloneDeep, findIndex, isEmpty } from 'lodash'

import { updateProduct } from '../../redux/actions'
import Style from './Style'

const Product = ({ match, history }) => {
  const classes = Style()
  const dispatch = useDispatch()

  const products = useSelector(state => state.products)
  const product = useSelector(state =>
    find(state.products, { id: match.params.id })
  )
  useEffect(() => {
    if (isEmpty(product)) history.push('/')
  }, [product])

  const [popup, setPopup] = useState(false)

  const onClickLoveIcon = event => {
    event.stopPropagation()

    const items = cloneDeep(products)
    const matchedIndex = findIndex(items, { id: product.id })
    items[matchedIndex].loved = items[matchedIndex].loved === 1 ? 0 : 1
    dispatch(updateProduct(items))
  }

  const onClickBuy = () => {
    const items = cloneDeep(products)
    const matchedIndex = findIndex(items, { id: product.id })
    items[matchedIndex].purchased = true
    dispatch(updateProduct(items))
  }

  return (
    <Container component="div" maxWidth="xs" className={classes.root}>
      {isEmpty(product) ? (
        <Grid className={classes.loadingScreen}>
          <CircularProgress />
        </Grid>
      ) : (
        <Card className={classes.productCard}>
          <CardHeader
            avatar={
              <IconButton onClick={() => history.goBack()}>
                <ArrowBackIcon />
              </IconButton>
            }
            action={
              <IconButton onClick={() => setPopup(true)}>
                <ShareIcon />
              </IconButton>
            }
            classes={{ action: classes.shareIcon }}
          />
          <CardMedia
            className={classes.productImage}
            image={product.imageUrl}
            title="img"
          />
          <CardContent className={classes.productCardContent}>
            <Grid
              container
              alignItems="flex-end"
              justify="space-between"
              style={{ marginBottom: 20 }}
            >
              <Typography gutterBottom variant="h6" component="h6">
                {product.title}
              </Typography>
              <IconButton onClick={onClickLoveIcon}>
                {product.loved ? (
                  <FavoriteOutlinedIcon color="error" />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
              </IconButton>
            </Grid>

            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              className={classes.price}
            >
              {product.price}
            </Typography>

            <Typography paragraph>{product.description}</Typography>

            <Button
              variant={product.purchased ? 'outlined' : 'contained'}
              disableElevation
              color="secondary"
              fullWidth
              onClick={onClickBuy}
              disabled={product.purchased}
            >
              {product.purchased ? 'Bought!' : 'Buy'}
            </Button>
          </CardContent>
        </Card>
      )}

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        onClose={() => setPopup(false)}
        open={popup}
        autoHideDuration={2000}
        message="Thank you for sharing :)"
      />
    </Container>
  )
}

Product.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Product
