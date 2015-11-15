"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require('./datatable.jsx');
var { Pagination } = require('react-bootstrap');
var _ = require('lodash');
require("./../styles/main.less");

const paginationRowCount = 10;

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
        this.state = {
            displayData: _.slice(tableData, 0, paginationRowCount),
            currentPage: 1
        }
    }

    setCurrentPage(event, selectedEvent) {
        var startValue = (selectedEvent.eventKey - 1) * paginationRowCount;
        this.setState({
            currentPage: selectedEvent.eventKey,
            displayData: _.slice(tableData, startValue, startValue + paginationRowCount)
        })
    }

    render() {
        var addNumber = tableData.length % paginationRowCount === 0 ? 0 : 1;
        var pageCount = _.floor((tableData.length / paginationRowCount) + addNumber);
        return (<div>
            <DataTable data={this.state.displayData} columnInfo={columnInfo}/>
            <Pagination
                prev
                next
                first
                last
                ellipsis
                items={pageCount}
                maxButtons={5}
                activePage={this.state.currentPage}
                onSelect={this.setCurrentPage.bind(this)}
                />
        </div>);
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('main-container')
);