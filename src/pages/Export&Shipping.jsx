import React, { Component } from 'react'
import ExportShippingInfo from '../componets/ExportShippingInfo'
import ShippingPartners from '../componets/ShippingPartners'
import ExportDocumentation from '../componets/ExportDocumentation'
import LeadtimesInsurance from '../componets/Leadtimes&Insurance'
import Header from '../componets/Header'
import Footer from '../componets/Footer'

export default class ExportShipping extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ExportShippingInfo/>
         <ShippingPartners/>
         <Footer/>
        <LeadtimesInsurance/>
      </div>
    )
  }
}
