import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle

  // TODO: Implement state for cart management

  // TODO: Implement state for category filtering

  const [products] = useState([
    { id: 1, name: 'Apple', price: 0.99, inStock: true, category: 'Fruits' },
    { id: 2, name: 'Banana', price: 0.79, inStock: false, category: 'Fruits' },
    { id: 3, name: 'Milk', price: 2.49, inStock: true, category: 'Dairy' },
    { id: 4, name: 'Cheese', price: 4.99, inStock: true, category: 'Dairy' },
  ])

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Display initial sample products */}
      <ProductList products={products}/>

      {/* TODO: Implement and render Cart component */}
    </div>
  )
}

export default App
