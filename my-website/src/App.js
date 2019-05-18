import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Container';
import MyNavbar from './components/MyNavbar';
import Chalkboard from './components/Chalkboard';
import bootstrap from './styles/bootstrap.min.css';

class App extends React.Component {
  render(){
    return (
      
      <div className="App">
          <link
            rel="stylesheet"
            href= {bootstrap}
          />
      
        <MyNavbar  className="App-header"/>
        <div className="card-holder">
          <Chalkboard className="card"/>
          <Chalkboard className="card"/>
          <Chalkboard className="card"/>
          <Chalkboard className="card"/>
          <Chalkboard className="card"/>
          <Chalkboard className="card"/>
        </div> 
        
  
      </div> 
    );
  }
}

export default App;