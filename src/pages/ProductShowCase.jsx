import React, { Component } from 'react'
import Header from '../componets/Header'
import ProductsPage from '../componets/ProductsPage'
import Footer from '../componets/Footer'
import ProductDetailPage from '../componets/ProductDetailPage'

export default class Page extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ProductDetailPage/>
        <Footer/>
      </div>
    )
  }
}
