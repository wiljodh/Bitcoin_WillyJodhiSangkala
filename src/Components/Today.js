import React, { Component } from 'react';
import axios from 'axios';



class today extends Component {
    constructor(){
        super();
        this.state ={
            valuta : 0 
        }
    }

    change(){
        this.setState({rupiah :'Rp' + this.refs.nama.value})
        // this.setState({user:this.refs.nama.value })
        axios.get('https://blockchain.info/tobtc?currency=USD&value=1')

        .then((ambilData)=>{
            console.log(ambilData.data)
            var rup = ambilData.data /14000
            var dol =rup * 14000
            console.log(rup)
            console.log(dol)
            this.setState({
                nilai : 'Btc' + rup *this.refs.nama.value
            })
        })
    }

    componentDidMount(){
        axios.get('https://blockchain.info/tobtc?currency=USD&value=1')

        .then((ambilData)=>{
            console.log(ambilData.data)
            var rup = ambilData.data /14000
            var dol =rup * 14000
            console.log(rup)
            console.log(dol)
            this.setState({
                valuta:rup 
            })
        })
    }

    
   

  render() {
    return (
      <div>
          <div className="today">
            <h1>Konversi Rupiah ke Bitcoin</h1>
            <h3>Kurs 1 USD = 14.000 IDR </h3>
            <input onChange={()=>{this.change();}} ref="nama" ></input><br />
            <h1> 
            {this.state.rupiah} =
            {this.state.nilai}
            </h1>
          </div>
               
      </div>
     
    );
  }
}

export default today;