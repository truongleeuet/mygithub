import React from 'react';
import ReactDOM from 'react-dom';

class Repo extends React.Component {
    render() {
        var {repo} = this.props;
        return (
            <li className="list-group-item">
                <a href={repo.html_url}>
                    {repo.name}
                </a> : {repo.description}
            </li>
        )
    }
}

export default Repo