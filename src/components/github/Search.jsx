import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        let username = this.refs.username.value.trim();

        if (!username) {
            alert('Please enter username');
            retrun;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Search Github Users</label>
                <input type="text" ref="username" className="form-control"/>
            </form>
        )
    }
}

export default Search