import React, { Component } from 'react';
import axios from 'axios'



class Bkrp extends Component {

    constructor(){
        super();
        this.state ={
            valuta : 0 
        }
    }

    change(){
        this.setState({Btc:'btc' + this.refs.nama.value})
        // this.setState({user:this.refs.nama.value })
        axios.get('https://blockchain.info/tobtc?currency=USD&value=1')

        .then((ambilData)=>{
            console.log(ambilData.data)
            var rup = 14000/ambilData.data 
           
            console.log(rup)
            this.setState({
                nilai : 'Rp' + rup*this.refs.nama.value
            })
        })
    }

    // componentDidMount(){
    //     axios.get('https://blockchain.info/tobtc?currency=USD&value=1')

    //     .then((ambilData)=>{
    //         console.log(ambilData.data)
    //         var rup = ambilData.data /14000
    //         var dol =rup * 14000
    //         console.log(rup)
    //         console.log(dol)
    //         this.setState({
    //             valuta:rup 
    //         })
    //     })
    // }

    
   

  render() {
    return (
      <div>
          <div className="today">
            <h1>Konversi Bitcoin ke Rupiah</h1>
            <h3>Kurs 1 USD = 14.000 IDR </h3>
            <input onChange={()=>{this.change();}} ref="nama" ></input><br />
            <h1> 
            {this.state.Btc} =
            {this.state.nilai}
            </h1>
          </div>
               
      </div>
     
    );
  }
}

export default Bkrp;