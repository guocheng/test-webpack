var ReactDOM = require('react-dom');
var React = require('react');
var Style = require('./style.css');

var Content = React.createClass({
    render: function () {
        return (
            <div>
                <p className="warn">It works!</p>
                <img src={require('./small_img.png')}></img>
                <img src={require('file-loader?name=[name].[ext]!./large_img.jpg')}></img>
            </div>
        );
    }
})

ReactDOM.render(
    <Content />,
    document.getElementById('root')
);
