var React = require('react');
var ReactDom = require('react-dom');
require('../less/meeting.less');

var Search = require('./search.js');
var List = require('./list.js');

var App = React.createClass({
    getInitialState: function () {
        return {
            list: [],
            filterText: ''
        }
    },
    componentDidMount: function () {
        var data = this.props.data.invited;
        var list = [];
        data.map(function (item, index) {
            item.invited = false;
            list.push(item);
        });

        this.setState({
            list: list
        });

    },
    onChangeInvited: function (id) {
        var list = this.props.data.invited;
        var newList = [];

        newList = list.map(function (item) {
            if (item.id === id) {
                item.invited = !item.invited;
            };

            return item;
        });

        this.setState({
            list: newList
        });
    },
    onFilterText: function (text) {
        this.setState({
            filterText: text
        });
    },
    render: function () {
        var data = this.props.data;
        var filterText = this.state.filterText;
        var filterData = data;
        
        if (filterText) {
            filterData = {};
            filterData.invited = data.invited.filter(function (item) {
                return item.name.indexOf(filterText) !== -1;
            });
        }
        return (
            <div className='wrapper'>
                <Search data={data} onFilterText={this.onFilterText}/>
                <List onChangeInvited={this.onChangeInvited} data={filterData}/>
            </div>
        )
    }
});

var data = {
  "invited": [
    {
      "name": "应波",
      "slug": "YingBo",
      "avatarUrl": "./src/img/1.jpg",
      "bio": "前端组",
      "id": 1
    },
    {
      "name": "陈辉",
      "slug": "chengHui",
      "avatarUrl": "./src/img/2.jpg",
      "bio": "测试组",
      "id": 2
    },
    {
      "name": "李政",
      "slug": "LiZheng",
      "avatarUrl": "./src/img/3.jpg",
      "bio": "PHP组",
      "id": 3
    },
 {
      "name": "肖美龙",
      "slug": "Xiaomeilong",
      "avatarUrl": "./src/img/4.jpg",
      "bio": "hr组",
      "id": 4
    },
    {
      "name": "李达康",
      "slug": "Lidakang",
      "avatarUrl": "./src/img/5.jpg",
      "bio": "Android组",
      "id": 5
    },
    {
      "name": "龙傲天",
      "slug": "Longaotian",
      "avatarUrl": "./src/img/6.jpg",
      "bio": "IOS组",
      "id": 6
    },
    {
      "name": "唐小棠",
      "slug": "Tangxiaotang",
      "avatarUrl": "./src/img/7.jpg",
      "bio": "UI组",
      "id": 7
    }
  ]
}

ReactDom.render(
    <App data={data}/>,
    document.getElementById('root')
);



