"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ShareNav = require ('./components/share.jsx');

class ContactMe extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div>
                <ShareNav/>
                contact me !!
            </div>
        )
    }
}

ReactDOM.render(
    <ContactMe />,
    document.getElementById('contact-container')
);