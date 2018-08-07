import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/css/App.css'
import '../style/css/index.css'
import '../style/css/List.css'

class List extends Component {

    constructor(){
        super();
        this.onChangeFilterText = this.onChangeFilterText.bind(this);

    }

    static propTypes = {
        contacts: PropTypes.array.isRequired,
    }

    state = {
        filterText: ''
    }

    onChangeFilterText(e) {
        this.setState({
            filterText: e.target.value
        })
    }


    render() {
        const filteredContacts = this.props.contacts.filter( item => {
            return item.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
        });
        return (
            <div className="list-container">
                <input name={"filter"} id={"filter"} value={this.state.filterText} onChange={this.onChangeFilterText} placeholder={"Adınızı veya numaranızı giriniz"} />
                <ul>
                    {
                        filteredContacts.map(item =>
                            <li key={item.phone}>
                                <span className="list-name">{item.name}</span>&nbsp;&nbsp;
                                <span className="list-phone">{item.phone}</span>
                            </li>
                        )
                    }

                </ul>
            </div>
        )
    }
}

export default List;