import React, { Component } from 'react'
import FAQ from '../componets/FAQ'
import Header from '../componets/Header'
import Footer from '../componets/Footer'

export default class FAQs extends Component {
  render() {
    return (
      <div>
        <Header />
        <FAQ />
        <Footer/>
      </div>
    )
  }
}
