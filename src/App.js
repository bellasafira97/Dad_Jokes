import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pertanyaan:'',
      jawaban: '',
      jokes:'',
    }
  }
  
  
  render() {
    let klik = () => {
      var url = `https://safe-falls-22549.herokuapp.com/random_joke`;
      axios.get(url)
      .then((x)=>{
        console.log(x.data)
        console.log(x.data.setup)
        this.setState({
          jokes: x.data,
          pertanyaan: x.data.setup,
          jawaban: x.data.punchline
        })
      }).catch()
    }
    
    return (
      <div className="App">
      <h1 className="text-white pt-md-5">HERE SOME JOKES FOR YOU</h1>
      <div className="card bg-white jokes">
      <div className="card-body text-right">
        <p className="card-title mt-xl-3 pt-xl-3 pb-xl-3">{this.state.pertanyaan}</p>
        <p className="card-text mb-xl-3 pb-xl-5"><b>{this.state.jawaban}</b></p>
        <button className="btn btn-danger" onClick={klik}>Reload</button>
      </div>
        
      </div>
      </div>
    );
  }
}

export default App;
