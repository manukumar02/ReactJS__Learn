import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/ReactAux/ReactAux';
import Backdrop from '../Backdrop/Backdrop';
import axios from 'axios';

class Modal extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  
  componentWillUpdate() {
    console.log('[Modal] willUpdate');
  }
  
  componentDidUpdate() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(dt => {
      console.log(dt);
    }).catch(err => {
      console.log('Error', err);
    })
  }
  
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div className={classes.Modal}
             style={{
               transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
               opacity: this.props.show ? '1' : '0'
             }}
        >
          {this.props.children}
        </div>
      </Aux>
    )
  }
  
}

export default Modal;
