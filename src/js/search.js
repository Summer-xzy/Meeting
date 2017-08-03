import React ,{Component} from 'react';

//获取输入框的内容，显示邀请的人
class Search extends Component{
    //把输入内容传到onFilterText中，使之改变状态
    onHandleChange () {
        this.props.onFilterText(this.refs._Ip.value);
    }
    render () {
        const data = this.props.data.invited;

        let personRow = [];
        let truePerson = [];
        data.forEach((item, index)=> {
            //如果小于两人，就把人名都添加到数组中，如果大于两人，只把前两个保留显示
            if (item.invited && index < 2) {
                personRow.unshift(<span key={index + 100}>{item.name}</span>);
                truePerson = personRow;
            }else if (item.invited && index >= 2) {
                personRow.unshift(<span key={index + 100}>{item.name}</span>);
                truePerson = personRow.slice(0, 2);
            }
        });
        return (
            <div className='searchBar'>
                <input ref='_Ip' type='text' placeholder='搜索你要通知的人' onChange={this.onHandleChange.bind(this)}/>
                <span>您已通知 {truePerson}等 {personRow.length}人</span>
            </div>
        )
    }
}


export default Search;