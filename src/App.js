import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./assets/css/style.css";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Introduction />
                <Header />
                <Content />
                <Footer />               
            </div>
        );
    }
}
