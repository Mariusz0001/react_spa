
import React, { Component } from 'react';
import CurrencyAPI from '../../tests/CurrencyAPI';

const axios = require("axios");


let _Text;
let _Email;

export const testowanieFunkcji = () => {
  return "hello!";
} 

class SendMessage extends Component {

   constructor(props){
     super(props);
     this.state = {};

     this.onSendMessage = this.onSendMessage.bind(this);
    
     this._Email = React.createRef(); 
     this._Text = React.createRef();     
   }

   onSendMessage(){
    this.getCurrency("USD");

    //_Email.value = "";
    //_Text.value = "";
   }

  getCurrency = async (currency) => {
    let cur = new CurrencyAPI();
    let ret = await cur.getCurrency(currency);

    alert("$$ Currency: " + ret);
    return ret;
  }

  render() {
    return (
        <div className="container">
          <div className='form-row'>
            <div className="form-group">
              <label id="NameLabel" htmlFor="Name">Email:</label>
              <input className="form-control" type="text" ref={ this._Email } id="Email" aria-describedby="emailHelp"></input>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label id="TextLabel" htmlFor="Text">Message content:</label>
              <textarea type="text" id="Text" ref={ this._Text } className="form-control" rows="3"></textarea>
            </div>
          </div>
          <button className="btn btn-success" type="button" onClick={this.onSendMessage}>Send</button>
        </div>
    );
  }
}

export default SendMessage;