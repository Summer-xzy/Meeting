import React ,{Component} from 'react';
import Item from './item.js';
//将对象列表添加到主页中
class List extends Component{
    render () {
        const data = this.props.data;
        let row = [];
        const _self = this;
        data.invited.forEach((item, index)=> {
            row.push(<Item onChangeInvited={_self.props.onChangeInvited.bind(this)} person={item} key={index + 1000}></Item>);
        });
        return (
            <div className='listWrapper'>
                <ul>    
                    {row}
                </ul>
            </div>
        )
    }
}
export default List;