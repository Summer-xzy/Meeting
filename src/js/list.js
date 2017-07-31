var React = require('react'); 

var Item = require('./item.js');

var List = React.createClass({
    render: function () {
        var data = this.props.data;
        var row = [];
        var _self = this;
        data.invited.forEach(function (item, index) {
            row.push(<Item onChangeInvited={_self.props.onChangeInvited} person={item} key={index + 1000}></Item>);
        });


        return (
            <div className='listWrapper'>
                <ul>    
                    {row}
                </ul>
            </div>
        )
    }
});

module.exports = List;