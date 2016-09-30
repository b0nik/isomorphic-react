import React, {Component} from 'react';
import {Link } from 'react-router';

export default class App extends Component {
    render() {
        return (
            <div>
                <Link to="/">index</Link><br/>
                <Link to="home">home</Link><br/>
                <Link to="contact">contact</Link><br/>
                {this.props.children}
            </div>
        )
    }
}
