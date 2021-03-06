import React, { Component } from "react";
import About from "./content/About";
import Lesson from "./content/Lesson";
import Action from "./content/Action";
import Contact from "./content/Contact";


export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <About />
                <Lesson />
                <Action />
                <Contact />
            </div>
        );
    }
}
