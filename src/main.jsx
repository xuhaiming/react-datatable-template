"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

import {Table, Column, Cell} from 'fixed-data-table';

require("fixed-data-table/dist/fixed-data-table.css");
require("./../styles/main.less");

const rows = [
    {
        name: 'Haiming',
        skill: 1000
    },
    {
        name: 'Yancey',
        skill: 0
    },
    {
        name: 'Haiming',
        skill: 1000
    },
    {
        name: 'Yancey',
        skill: 0
    },
    {
        name: 'Haiming',
        skill: 1000
    },
    {
        name: 'Yancey',
        skill: 0
    }
];

class HelloWorld extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div>
            <Table
                rowHeight={50}
                rowsCount={rows.length}
                width={500}
                height={200}
                headerHeight={50}>
                <Column
                    header={<Cell>Name</Cell>}
                    cell={props => (
                        <Cell {...props}>
                          {rows[props.rowIndex].name}
                        </Cell>
                      )}
                    width={200}
                />
                <Column
                    header={<Cell>Skill</Cell>}
                    cell={props => (
                        <Cell {...props}>
                          {rows[props.rowIndex].skill}
                        </Cell>
                      )}
                    width={200}
                />
                <Column
                    header={<Cell>Col 3</Cell>}
                    cell={<Cell>Hello</Cell>}
                    width={200}
                />
            </Table>
        </div>);
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('main-container')
);