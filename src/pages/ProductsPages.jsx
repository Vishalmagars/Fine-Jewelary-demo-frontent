import React, { Component } from 'react'
import Header from '../componets/Header'
import ProductsPage from '../componets/ProductsPage'
import Footer from '../componets/Footer'

export default class ProductsPages extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ProductsPage/>
        <Footer/>
      </div>

    )
  }
}
