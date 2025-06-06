import React from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product }) => {
  return (
    <Card
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
      variant="outlined"
      sx={{
        backgroundColor: product.inStock ? '#fff' : '#f8d7da',
        color: product.inStock ? '#000' : '#721c24',
        opacity: product.inStock ? 1 : 0.6,
        marginBottom: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography>Price: {product.price}</Typography>
        <Typography>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={!product.inStock}
          sx={{ marginTop: 1 }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProductCard
