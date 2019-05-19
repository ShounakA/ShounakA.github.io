import React from 'react';
import Ring from './Ring';
import imgHome from '../assets/test.jpg';
import { Container } from 'react-bootstrap';
class RingNav extends React.Component {

    constructor(props){
      super(props);
      var config = props.config;
      this.state = {
        images: config.imglist,
        positions: config.deglist,

      }
    }
    render() {
      var actions = [
        {image: 'fingerprint.svg', deg: '0'},
        {image: 'fingerprint.svg', deg: '180'},
        {image: 'fingerprint.svg', deg: '135'},

      ]
      for (var i=0; i<actions.length; i++){
        actions[i].image = this.state.images[i];
        actions[i].deg = this.state.positions[i];
      }
      return (
        <Container>
          <Ring src={imgHome} label="Home" actions={actions}/>
        </Container>
      );
    }
  }
  export default RingNav;