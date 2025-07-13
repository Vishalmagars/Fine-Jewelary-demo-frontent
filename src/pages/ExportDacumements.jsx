import React, { Component } from 'react'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import ExportDocumentation from '../componets/ExportDocumentation'

export default class ExportDacumements extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ExportDocumentation/>
        <Footer/>
      </div>
    )
  }
}
