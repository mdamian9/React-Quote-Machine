import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: 'quote',
      author: 'author'
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
              <br />
              <div className='card mx-auto' id='quote-box' style={{ width: '60%', padding: '15px' }}>
                <div id='text'>
                  "{this.state.quote}"
                </div>
                <br />
                <div id='author'>
                  - "{this.state.author}"
                </div>
                <br />
                <button type='button' className='btn btn-danger' id='new-quote' onClick={this.getNewQuote}>New Quote</button>
                <br />
                <a href='https://twitter.com/intent/tweet/' target='_blank' rel='noopener noreferrer' id='tweet-quote'>
                  Tweet Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
