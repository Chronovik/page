var Authorize = React.createClass({
  render: function() {
    return (
      <div className="authorize">
        <button>vk.com авторизация</button>  
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Authorize/>
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
