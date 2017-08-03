import React ,{Component} from 'react';
import ReactDom from 'react-dom';

import '../less/meeting.less';
import Search from './search.js';
import List from './list.js';

//组件功能：主组件,设置初始状态，被邀请列表为空数组，输入内容为空
class App extends Component{
    constructor () {
      super();
        this.state = {
            list: [],
            filterText: ''
        }
    }
    //遍历数据，给所有数据添加invited：false，并返回到列表中
    componentDidMount () {
        const data = this.props.data.invited;
        
        let list = [];
        data.map((item, index)=> {
          
            item.invited = false;
            list.push(item);
            
        });
        this.setState({
            list: list
        });

    }
    //将已经添加invite的list遍历，然后判断id，如果相同，则将invited置反，并设置list为Newlist
    onChangeInvited (id) {
        const list = this.props.data.invited; //获取数据
        let newList = [];

        newList = list.map((item)=> {  //筛选数组数据，得到对象
            if (item.id === id) {             //如果对象的id和id相等
                item.invited = !item.invited; //给对象一个invited状态，并将状态置反
            };
            return item;
        });

        this.setState({
            list: newList
        });
    }
    //将输入内容放入filterText，使状态改变
    onFilterText (text) {
        this.setState({
            filterText: text   //输入内容
        });
    }
    //输入内容与数据内容匹配
    render () {
        const data = this.props.data;   //获取对象

        let filterText = this.state.filterText; //获取输入内容
        let filterData = data;
        
        if (filterText) {   //如果有输入内容
            filterData = {};   //将对象设为空
            filterData.invited = data.invited.filter((item)=> {  //筛选对象
                return item.name.indexOf(filterText) !== -1;            //如果对象的名字与输入的相同就不等于-1
          });
        }
        return (
            <div className='wrapper'>
                <Search data={data} onFilterText={this.onFilterText.bind(this)}/>
                <List onChangeInvited={this.onChangeInvited.bind(this)} data={filterData}/>
            </div>
        )
    }
}

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



