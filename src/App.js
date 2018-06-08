import React, { Component } from 'react';
import Output from './Components/output';
import Today from './Components/today';
import Bkrp from './Components/Bkrp'


class App extends Component {
  

    render() {
        return(
            <div className="App">
            <center >
              <img style={{width:'500px'}} alt='asd' src="https://blockchainfederation.org/wp-content/uploads/2017/03/blockchain-logo-horizontal.png" />
            </center>
            <center>
              <div className="tabmenu" style={{width:"700px",margin:"200px",background:"white"}}>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Bitcoin hari ini</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile" aria-selected="false">Rupiah ke bitcoin</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile1" role="tab" aria-controls="profile" aria-selected="false">Bitcoin ke rupiah</a>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="login">
                    <Output ></Output>
                     
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile-tab">
                  <Today > </Today>
                  </div>

                  <div className="tab-pane fade" id="profile1" role="tabpanel" aria-labelledby="profile-tab">
                    <Bkrp ></Bkrp>
                  </div>
                </div>
              
              </div>
            </center>
            </div>
        )
    }
}

export default App;
