import React from 'react'
import ProductCard from './ProductCard'
import { Container, Typography } from '@mui/material'

const ProductList = ({ products }) => {
  const inStockProducts = products.filter(p => p.inStock)

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Available Products
      </Typography>

      {inStockProducts.length === 0 ? (
        <Typography>No products are currently in stock.</Typography>
      ) : (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </Container>
  )
}

export default ProductList
