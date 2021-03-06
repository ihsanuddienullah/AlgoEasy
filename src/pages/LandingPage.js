import React, { Component } from 'react'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Content from '../components/Content';
import Footer from '../components/Footer';
import '../assets/css/style.css';

// https://bootstrapmade.com/demo/Arsha/

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Introduction />
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}
