import React, { Component } from 'react'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import CustomOrderForm from '../componets/CustomOrderForm'

export default class CustomForm extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CustomOrderForm/>
        <Footer/>

      </div>
    )
  }
}
