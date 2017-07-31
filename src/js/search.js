var React = require('react'); 

var Search = React.createClass({
    onHandleChange: function () {
        this.props.onFilterText(this.refs._Ip.value);
    },
    render: function () {
        var data = this.props.data.invited;

        var personRow = [];
        var truePerson = [];
        data.forEach(function (item, index) {
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
                <input ref='_Ip' type='text' placeholder='搜索你要通知的人' onChange={this.onHandleChange}/>
                <span>您已通知 {truePerson}等 {personRow.length}人</span>
            </div>
        )
    }
});


module.exports = Search;