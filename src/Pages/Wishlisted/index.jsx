import React from 'react'
import {
  Container,
  Card,
  CardHeader,
  Grid,
  IconButton,
  CardContent,
  Typography,
  CardMedia
} from '@material-ui/core'
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { isEmpty, filter } from 'lodash'

import Style from './Style'

const Wishlisted = ({ history }) => {
  const classes = Style()

  const products = useSelector(state => filter(state.products, { loved: 1 }))

  return (
    <Container component="div" maxWidth="xs" className={classes.root}>
      <Card elevation={0}>
        <CardHeader
          avatar={
            <IconButton onClick={() => history.goBack()}>
              <ArrowBackIcon />
            </IconButton>
          }
          title="Wishlisted"
        />
        <CardContent style={{ padding: '0 20px' }}>
          {isEmpty(products) ? (
            <Grid className={classes.noData}>
              <Typography component="h5" variant="h5">
                No data
              </Typography>
            </Grid>
          ) : (
            products.map(product => (
              <Card
                className={classes.productCard}
                key={product.id}
                onClick={() => history.push(`detail/${product.id}`)}
              >
                <div className={classes.productCardDetail}>
                  <CardMedia
                    className={classes.productCardImage}
                    image={product.imageUrl}
                  />
                  <CardContent className={classes.productCardContent}>
                    <Typography
                      component="h5"
                      variant="h5"
                      className={classes.productTitle}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      className={classes.productPrice}
                    >
                      {product.price}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            ))
          )}
        </CardContent>
      </Card>
    </Container>
  )
}

Wishlisted.propTypes = {
  history: PropTypes.object.isRequired
}

export default Wishlisted
