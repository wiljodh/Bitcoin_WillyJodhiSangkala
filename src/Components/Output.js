import React, { Component } from 'react';
import axios from 'axios'



class Output extends Component {
  constructor(){
    super();
    this.state ={
      namger : ''
    }
  }

  componentDidMount(){
    axios.get('https://blockchain.info/ticker')
    .then((ambilData)=>{
      console.log(ambilData.data.AUD);
      console.log(ambilData);
      this.setState({
        ausBuy:ambilData.data.AUD.buy,
        ausSell:ambilData.data.AUD.sell,
        eurBuy : ambilData.data.EUR.buy,
        eurSell : ambilData.data.EUR.sell,
        pouBuy : ambilData.data.GBP.buy,
        pouSell : ambilData.data.GBP.sell,
        yenBuy :ambilData.data.JPY.buy,
        yenSell : ambilData.data.JPY.sell,
        usdBuy : ambilData.data.USD.buy,
        usdSell : ambilData.data.USD.sell,
      })
      
    })
  }

  render() {
    var css = {border:'1px solid black', padding:'12px'}
    
    
    return (
      <div>
        <center>
            <h1>Coba Get Data</h1>
            <table style={css}>
            <tbody>
                <tr>
                <th style={css}>Mata Uang</th>
                <th style={css}>Harga Beli bitcoin</th>
                <th style={css}>Harga Jual bitcoin</th>
                
                </tr>
                <tr>
                 <td style={css}>Dollar Australia</td>
                 <td style={css}>{this.state.ausBuy}</td>
                 <td style={css}>{this.state.ausSell}</td>
                </tr> 
                <tr>
                 <td style={css}>Euro eropa</td>
                 <td style={css}>{this.state.eurBuy}</td>
                 <td style={css}>{this.state.eurSell}</td>
                </tr> 
                <tr>
                 <td style={css}>Poundstterling inggris</td>
                 <td style={css}>{this.state.pouBuy}</td>
                 <td style={css}>{this.state.pouSell}</td>
                </tr> 
                <tr>
                 <td style={css}>Yen Jepang</td>
                 <td style={css}>{this.state.yenBuy}</td>
                 <td style={css}>{this.state.yenSell}</td>
                </tr> 
                <tr>
                 <td style={css}>Dollar Amerika</td>
                 <td style={css}>{this.state.usdBuy}</td>
                 <td style={css}>{this.state.usdSell}</td>
                </tr> 
      {/* // { data } */}
            </tbody>
          </table>
      </center>
      </div>
);
}}

export default Output;