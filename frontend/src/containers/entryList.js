import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectedEntry} from '../actions/index.js'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';


class EntryList extends Component {
    render() {
        let entry = this.props.entry.map((entry) => {
            return (
                <li key={entry._id} className="list-group-item" onClick={() => this.props.selectedEntry(entry._id)}>
                  <Link to={`/entry/${entry._id}`}>{entry.name}</Link>
                </li>
            );
        });
        return (
            <div>
              <h5>List of Journal Entries:</h5>
              <ul>
                {entry}
              </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {entry: state.entry};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectedEntry: selectedEntry}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
