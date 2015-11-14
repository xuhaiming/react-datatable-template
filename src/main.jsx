"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
require("./../styles/main.less");

class HelloWorld extends React.Component {
    render() {
        return (<div>Hello World</div>);
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('main-container')
);