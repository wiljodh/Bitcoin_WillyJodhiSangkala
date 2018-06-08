import React, { Component } from 'react';
import './App.css';
import {Link,Route} from 'react-router-dom'
import Pricetable from './Components/Pricetable'
import Convertbit from './Components/Convertbit'
import Convertidr from './Components/Convertidr'

class App extends Component {
  render() {
    return (
      <div className='container all' >
        <div className='row'>
				<div className='col-lg-3'>
          <div className='list-group mylist'>
          <Link to ='/Pricetable' className="list-group-item">Price Table Bitcoin </Link>
          <Link to ='/Convertidr' className="list-group-item">Converter IDR to Bitcoin </Link>
          <Link to ='/Convertbit' className="list-group-item">Converter Bitcoin to IDR</Link>
          </div>
           
        </div>

        <div className='col-lg-9'>
          <Route path='/' component={'Home'} />
          <Route path='/Pricetable' component={Pricetable} />
          <Route path='/Convertidr' component={Convertidr} />
          <Route path='/Convertbit' component={Convertbit} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
