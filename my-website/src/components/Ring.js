import React from 'react';
import finger from '../assets/fingerprint.svg';
class Ring extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: props.src,
            label: props.label,
            actions: props.actions
        }
    }
    render() {
        let images = this.state.actions.map(actionObj => {
            //TODO change actions directory later
            return <img key={actionObj.image} src={require(`../assets/${actionObj.image}`)} alt="" className={`action-ring actions deg${actionObj.deg}`} />
         });
      return (
          <div>
              
              <img src={this.state.image} className="ring circle-container" alt={this.state.label} />
              <div>
                       { images }
              </div>
          </div>
         
      );
    }
  }
  export default Ring;