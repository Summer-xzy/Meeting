var React = require('react'); 

var Item = React.createClass({
    render: function () {
        var person = this.props.person;
        var name = person.name;
        var url = person.avatarUrl;
        var des = person.bio;
        var id = person.id;

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
});

module.exports = Item;