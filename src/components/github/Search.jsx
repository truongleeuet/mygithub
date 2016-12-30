import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        console.log('Submitted');
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>Search Github Users</label>
                <input type="text" ref="username" className="form-control"/>
            </form>
        )
    }
}

export default Search