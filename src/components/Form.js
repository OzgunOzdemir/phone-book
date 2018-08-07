import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../style/css/App.css'
import '../style/css/index.css'
import '../style/css/List.css'
import '../style/css/Form.css'

class Form extends Component {

    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    static propTypes = {
        addContact: PropTypes.func,
    }
    
    state = {
        name: '',
        phone: ''
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });  
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addContact({
            ...this.state
        })

        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input name="name" id="name" value={this.state.name} onChange={this.onChange} placeholder="İsim giriniz" />
                <br/>
                <input name="phone" id="phone" value={this.state.phone} onChange={this.onChange} placeholder="Telefon numarasını giriniz"/>
                <br/>
                <button className="add-button">Ekle</button>
                </form>
            </div>
        )
    }
}

export default Form;