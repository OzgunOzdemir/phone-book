import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import List from './List';


class Contacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        addContact: PropTypes.func
    };

    render() {
        return (
            <div className="container">
                <List contacts={this.props.contacts}/>
                <Form addContact={this.props.addContact}/>
            </div>
        )
    }
}

export default Contacts;