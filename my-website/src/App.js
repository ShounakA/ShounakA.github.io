import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import RingNav from './components/RingNav';


class App extends React.Component {
  render(){
    const imglist = ['fingerprint.svg', 'Yin_yang.svg', 'fingerprint.svg'];
    const deglist = ['0', '180', '135'];
    var config = {
      imglist: imglist,
      deglist: deglist,
    }
    return (
      
      <body className="App">
          <link
            rel="stylesheet"
            href= "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" 
            integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" 
            crossOrigin="anonymous"/>
          <div className="upr">

          </div>
          <Container className="mid">
            <RingNav config={config}/>
          </Container>
          <div className="low">

          </div>
      </body> 
    );
  }
}

export default App;