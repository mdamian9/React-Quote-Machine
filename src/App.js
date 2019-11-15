import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
    this.getNewQuote = this.getNewQuote.bind(this);
  };

  getNewQuote = () => {
    axios.get('https://api.quotable.io/random')
      .then(res => {
        this.setState(() => {
          return { quote: res.data.content, author: res.data.author }
        });
      }).catch(err => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    axios.get('https://api.quotable.io/random')
      .then(res => {
        this.setState(() => {
          return { quote: res.data.content, author: res.data.author }
        });
      }).catch(err => {
        console.log(err);
      });
  };

  render = () => {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <div className='card mx-auto' id='quote-box' style={{ width: '60%', padding: '15px', marginTop: '20%' }}>
                <div id='text'>
                  <h5>
                    <i>
                      "{this.state.quote}"
                  </i>
                  </h5>
                </div>
                <div id='author'>
                  <h6>
                    - {this.state.author}
                  </h6>
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
