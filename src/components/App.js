import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/css/App.css';
import '../style/css/index.css';

import Contacts from '../components/Contacts';

class App extends Component {

  constructor(){
    super();
    this.addContact = this.addContact.bind(this);

  }
   
  state = {
    contacts: [{
        name: "Özgün",
        phone: "1111111111"   
    },{
        name: "Gürol",
        phone: "2222222222"
    }]
};

addContact(item){
  const {contacts} = this.state;
  contacts.push(item);
  this.setState({
    contacts
  })
}

  render() {
    return (
      <div className="App">
          <Contacts
          addContact={this.addContact} 
          contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
