var React = require('react');
var ReactDOM = require('react-dom');


var city=[
    {cityName:'北京',id:'1'},
    {cityName:'上海',id:'2'},
    {ciryName:'深圳',id:'3'}
]

var jobList =[
    {id:'1',cityId:'1',category:'技术',JobList:[
        {jobName:'前端',id:'111'},
        {jobName:'php开发工程师',id:'112'},
        {jobName:'java开发工程师',id:'113'}
    ]},
    {id:'2',cityId:'1',category:'产品',JobList:[
        {jobName:'产品经理',id:'121'},
        {jobName:'产品助理',id:'122'}
    ]},
    {id:'3',cityId:'1',category:'客服服务',JobList:[
        {jobName:'客服服务',id:'131'},
        {jobName:'产品助理',id:'132'},
        {jobName:'电话服务',id:'133'},
        {jobName:'增值服务',id:'134'},
        {jobName:'电话培训',id:'135'}
    ]},
    {id:'4',cityId:'1',category:'市场及销售',JobList:[
        {jobName:'市场及销售',id:'141'},
        {jobName:'市场类',id:'142'},
        {jobName:'销售类',id:'143'},
        {jobName:'运营类',id:'144'}
    ]},
    {id:'5',cityId:'2',category:'技术',JobList:[
        {jobName:'前端',id:'211'},
        {jobName:'php开发工程师',id:'212'},
        {jobName:'java开发工程师',id:'213'}
    ]},
    {id:'6',cityId:'2',category:'产品',JobList:[
        {jobName:'产品经理',id:'221'},
        {jobName:'产品助理',id:'222'}
    ]},
    {id:'7',cityId:'2',category:'客服服务',JobList:[
        {jobName:'客服服务',id:'231'},
        {jobName:'产品助理',id:'232'},
        {jobName:'电话服务',id:'233'},
        {jobName:'增值服务',id:'234'},
        {jobName:'电话培训',id:'235'}
    ]},
    {id:'8',cityId:'2',category:'市场及销售',JobList:[
        {jobName:'市场及销售',id:'241'},
        {jobName:'市场类',id:'242'},
        {jobName:'销售类',id:'243'},
        {jobName:'运营类',id:'244'}
    ]},
    {id:'10',cityId:'3',category:'产品',JobList:[
        {jobName:'产品经理',id:'321'},
        {jobName:'产品助理',id:'322'}
    ]},
    {id:'11',cityId:'3',category:'客服服务',JobList:[
        {jobName:'客服服务',id:'331'},
        {jobName:'产品助理',id:'332'},
        {jobName:'电话服务',id:'333'},
        {jobName:'增值服务',id:'334'},
        {jobName:'电话培训',id:'335'}
    ]},
    {id:'12',cityId:'3',category:'市场及销售',JobList:[
        {jobName:'市场及销售',id:'341'},
        {jobName:'市场类',id:'342'},
        {jobName:'销售类',id:'343'},
        {jobName:'运营类',id:'344'}
    ]}
]


class SearchBar extends React.Component {
    constructor() {
        super();
        this.state={
            open:false
        }
    }
    onMouseEnter(event){
        this.setState({open:true});
    }
    onMouseLeave(event){
        this.setState({open:false});
    }
    render() {
        var sublistClassName = "down-menu",arrowClassName="angle-gray-down";
        if(!this.state.open) {
            sublistClassName += " hide";
            arrowClassName= "angle-gray-down";
        }
        else {
            sublistClassName += " show";
            arrowClassName= "angle-gray-up";
        }
        

        return (
            <div className="searchBarContainer">
                <ul className="searchBar">
                    <li onMouseOver={this.onMouseEnter.bind(this)} onMouseOut={this.onMouseLeave.bind(this)}>city
                        <span className={arrowClassName}></span>
                        <ul className={sublistClassName}>
                            <li>beijing</li>
                            <li>shanghai</li>
                            <li>shenzhen</li>
                        </ul>
                    </li>
                    <li>
                        main job1
                        <ul className="down-menu">
                            <li>sub job 1 1</li>
                            <li>sub job 1 2</li>
                            <li>sub job 1 3</li>
                        </ul>
                    </li>
                    <li>
                        main job2

                        <ul className="down-menu">
                            <li>sub job 2 1</li>
                            <li>sub job 2 2</li>
                            <li>sub job 2 3</li>
                        </ul>
                    </li>
                    <li>
                        main job3

                        <ul className="down-menu">
                            <li>sub job 3 1</li>
                            <li>sub job 3 2</li>
                            <li>sub job 3 3</li>
                        </ul>
                    </li>
                    <li>
                        main job4

                        <ul className="down-menu">
                            <li>sub job 4 1</li>
                            <li>sub job 4 2</li>
                            <li>sub job 4 3</li>
                        </ul>
                    </li>
                    <li>
                        main job5
                    </li>
                </ul>
                <div>
                    <input placeholder="enter job"/>
                    <button value="search">search</button>
                </div>
            </div>
        )
    }

}

module.exports = SearchBar;