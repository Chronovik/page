var app = {
  baseOauthUrl: 'https://oauth.vk.com/authorize',
};

var Authorize = React.createClass({
  render: function() {
    return (
      <div className="authorize">
        <a href="{this.props.url}">vk.com авторизацdия</a>  
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Authorize url="{app.baseOauthUrl}"/>
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);