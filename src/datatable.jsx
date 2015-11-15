"use strict";

var React = require('react');

import {Table, Column, Cell} from 'fixed-data-table';

require("fixed-data-table/dist/fixed-data-table.css");

class DataTable extends React.Component {
    constructor() {
        super();
    }

    render() {
        var rows = this.props.data;
        var columns = this.props.columnInfo.map(column => {
            return (
                <Column
                    key={column.id}
                    header={<Cell>{column.header}</Cell>}
                    cell={props => (
                            <Cell {...props}>
                                 {rows[props.rowIndex][column.id]}
                            </Cell>
                          )}
                    width={200}
                />)
        });
        return (
            <Table
                rowHeight={50}
                rowsCount={rows.length}
                width={1000}
                height={500}
                headerHeight={50}>
                {columns}
            </Table>);
    }
}

module.exports = DataTable;