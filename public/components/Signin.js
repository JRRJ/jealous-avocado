import { connect } from 'react-redux';
import actions from '../redux/actions';
var _ = require('underscore');

class Signin extends React.Component {
  constructor(props) {
    super(props);
  }

  escape(userInfo) {
    var escaped = {};

    for (var key in userInfo) {
      var value = userInfo[key];
      escaped[key] = typeof value === 'string' ? _.escape(value) : value;
    }

    return escaped;
  }

  postUser(e) {
    e.preventDefault();

    let username = $('#username').val();
    let password = $('#password').val();

    var userObj = this.escape.call(this, {username: username, password: password});


    $.post('/signin', userObj)
    .done(() => {
      this.props.dispatch(actions.signinUser(username));


      window.localStorage.setItem('state', JSON.stringify(this.props));

      console.log('props signin: ', this.props);
      $('#signinForm').hide();
      
    })
    .fail(e => {
      $('#errorInfo').remove();
      $('#signinForm').append('<div id="errorInfo"><i>PLEASE ENTER ALL CORRECT INFO</i></div>');
    });
    // on fail --> present user with failed auth message

  }

  componentDidMount() {
    $('#signinForm #username').focus();
  }

  render() {
    return (
      <div>
      Sign In
        <form id="signinForm" onSubmit={this.postUser.bind(this)}>
          <input id='username' placeholder='username'/>
          <input id='password' placeholder='password' type='password' />
          <input type='submit' className="btn btn-default"/>
        </form> 
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return state;
}

export default connect(mapStatetoProps)(Signin);
