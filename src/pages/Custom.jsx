import React, { Component } from 'react'
import CustomOrderIntor from '../componets/CustomOrderIntor'
import CustomOrderForm from '../componets/CustomOrderForm'
import CoustomPortfolio from '../componets/CoustomPortfolio'
import Header from '../componets/Header'

export default class CustomOrder extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CustomOrderIntor/>
       
      </div>
    )
  }
}
