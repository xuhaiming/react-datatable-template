var React = require('react');
var ReactDOM = require('react-dom');

class SearchBar extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(
            <ul className="searchBar">
                <li>city
                    <ul>
                        <li>beijing</li>
                        <li>shanghai</li>
                        <li>shenzhen</li>
                    </ul>
                </li>
                <li>
                    main job1
                    <ul>
                        <li>sub job 1 1</li>
                        <li>sub job 1 2</li>
                        <li>sub job 1 3</li>
                    </ul>
                </li>
                <li>
                    main job2

                    <ul>
                        <li>sub job 2 1</li>
                        <li>sub job 2 2</li>
                        <li>sub job 2 3</li>
                    </ul>
                </li>
                <li>
                    main job3

                    <ul>
                        <li>sub job 3 1</li>
                        <li>sub job 3 2</li>
                        <li>sub job 3 3</li>
                    </ul>
                </li>
                <li>
                    main job4

                    <ul>
                        <li>sub job 4 1</li>
                        <li>sub job 4 2</li>
                        <li>sub job 4 3</li>
                    </ul>
                </li>
                <li>
                    main job5
                </li>
                <li>
                    <input placeholder="enter job"/>
                    <button value="search">search</button>
                </li>
            </ul>
        )
    }

}

module.exports=SearchBar;