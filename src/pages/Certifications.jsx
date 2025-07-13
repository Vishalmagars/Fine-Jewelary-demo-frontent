import React, { Component } from 'react'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import CertificationsAffiliations from '../componets/CertificationsAffiliations'

export default class Certifications extends Component {
  render() {
    return (
      <div>
        <Header/>
        <CertificationsAffiliations/>
        <Footer/>
      </div>
    )
  }
}

