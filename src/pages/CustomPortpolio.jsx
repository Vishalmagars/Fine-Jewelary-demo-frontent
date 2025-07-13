import React, { Component } from 'react';
import CoustomPortfolio from '../componets/CoustomPortfolio';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

export default class CustomPortfolio extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                   <CoustomPortfolio/>
                </main>
                <Footer/>
            </div>
        );
    }
}
