import React, { Component } from 'react'
import CompanyHistory from '../componets/CompanyHistory'
import LeadershipTeam from '../componets/LeadershipTeam'
import CertificationsAffiliations from '../componets/CertificationsAffiliations'
import CraftsmanshipProcess from '../componets/CraftsmanshipProcess'
import GlobalReachMap from '../componets/GlobalReachMap'
import Header from '../componets/Header'
import AboutUs from '../componets/aboutus'
import Footer from '../componets/Footer'

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <AboutUs/>
                <LeadershipTeam />
                <Footer/>
            </div>
        )
    }
}
