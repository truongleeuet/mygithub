import React from 'react';
import ReactDOM  from 'react-dom';
import Profile from './github/Profile.jsx';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: 'truongleeuet',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }

    //Get user data from github
    getUserData() {
        $.ajax({
            url: 'http://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({userData: data})
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({username: null})
                alert(err)
            }
        })
    }

    getUserRepos() {
        $.ajax({
            url: 'http://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage +'&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '$sort=created',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({userRepos: data})
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({username: null})
                alert(err)
            }
        })
    }

    componentDidMount() {
        this.getUserData();
        this.getUserRepos();
    }
    render(){
        return(
            <div>
                <Profile {...this.state} />
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientId: 'e76a4f30171642dae7c7',
    clientSecret: '905c7bbd1d52dd1a86161f2339d9c9eb7e4f9cc8'
}

export default App