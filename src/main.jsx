"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require('./datatable.jsx');
require("./../styles/main.less");

var tableData = [];
for (var i = 0; i < 500; i++) {
    tableData.push({
        name: <div>Haiming <b>{i + 1}</b></div>,
        skill: 100 * i,
        birthday: "2010-01-01"
    });
}

const columnInfo = [
    {
        id: "name",
        header: <div>My Name</div>
    },
    {
        id: "skill",
        header: "Skill"
    },
    {
        id: "birthday",
        header: "Birthday"
    }
];

class HelloWorld extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div>
            <DataTable data={tableData} columnInfo={columnInfo}/>
        </div>);
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('main-container')
);