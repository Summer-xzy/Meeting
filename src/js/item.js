import React ,{Component} from 'react';

//每个对象组件，点击之后改变样式，并将ID传给onChangeInvited
class Item extends Component{
    render () {
        const person = this.props.person; //获取每个对象
        const name = person.name;         //获取对象name
        const url = person.avatarUrl;     //图片
        const des = person.bio;           //对象分组
        const id = person.id;             //对象ID
        if (person.invited) {
            var style = {
                background: 'linear-gradient(to bottom,#f8f8f9,#e6e6e8)',
                border: '1px solid #bbb',
                boxShadow: '0 1px 0 #fff inset,0 1px 0 rgba(0,0,0,.1)'    
            }
        }else {
            var style = {
                background: 'linear-gradient(to bottom,#adda4d,#86b846)',
                border: '1px solid #6d8f29',
                boxShadow: '0 1px 0 rgba(255,255,255,.5) inset,0 1px 0 rgba(0,0,0,.2)'
            }
        }
        return (
            <li className='item'>
                <div className='itemDiv'>
                    <img src={url} />
                    <div className='name'>{name}</div>
                    <div className='des'>{des}</div>
                    <button style={style} onClick={ function Invited() { this.props.onChangeInvited(id) }.bind(this) } >{person.invited ? '取消通知' : '通知会议'}</button>
                </div>
            </li>
        )
    }
}

export default Item;