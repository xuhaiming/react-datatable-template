"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require('./datatable.jsx');
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

class PaginationBar extends React.Component {
    constructor() {
        super();
    }

    onPageItemClick(pageNum) {
        this.props.setPage(pageNum);
    }

    render() {
        var buttons = [];
        for(var i = 1; i <= this.props.totalLength; i++){
            var pageItem = this.props.currentPage === i ? <b>{i}</b> : <span>{i}</span>;
            buttons.push(
                <span key={i} onClick={this.onPageItemClick.bind(this, i)}>{pageItem}</span>
            );
        }
        return (
            <div>
                {buttons}
            </div>
        );
    }
}

class HelloWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            displayData: _.slice(tableData, 0, paginationRowCount),
            currentPage: 1
        }
    }

    setCurrentPage(pageNum) {
        this.setState({
            currentPage: pageNum
        })
    }

    render() {
        var addNumber = tableData.length % paginationRowCount === 0 ? 0 : 1;
        var pageCount = _.floor((tableData.length / paginationRowCount) + addNumber);
        return (<div>
            <DataTable data={this.state.displayData} columnInfo={columnInfo}/>
            <PaginationBar totalLength={pageCount} currentPage={this.state.currentPage} setPage={this.setCurrentPage.bind(this)}/>
        </div>);
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('main-container')
);