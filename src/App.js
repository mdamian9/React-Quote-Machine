import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: 'quote'
    };
  };

  getNewQuote = () => {
    console.log('get new quote');
  };

  render = () => {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              App
              <div id='quote-box'>
                <div id='text'>
                  {this.state.quote}
                </div>
                <br />
                <div id='author'>

                </div>
                <br />
                <button onClick={this.getNewQuote} id='new-quote' className='btn btn-danger'>New Quote</button>
                <br />
                <a href='https://twitter.com/' id='tweet-quote'>Tweet Quote</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
