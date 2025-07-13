import React, { Component } from 'react'
import Header from '../componets/Header'
import HeroSection from '../componets/HeroSection'
import Categories from '../componets/Categories'
import FeatureProducts from '../componets/FeatureProducts'
import FAQ from '../componets/FAQ'
import Testimonial from '../componets/Testimonial'
import AboutUs from '../componets/aboutus'
import QuoteForm from '../componets/QuoteForm'
import Footer from '../componets/Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
      
        <HeroSection />
        <FeatureProducts />
        <Categories />
        <QuoteForm/>
        {/* <AboutUs/> */}
        <Testimonial />
        <Footer/>

      </div>
    )
  }
}
