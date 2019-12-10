import React, { Component } from 'react';

class UnderTableForm extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <b><u>{this.props.title}</u></b>
        <i className={'fas fa-user-plus'}></i>
        :
        <div className={this.props.name}>
          <input type="text"/>  
          <i className={'fas fa-user-check'}></i>
        </div>
        
      </div>
     );
  }
}
 
export default UnderTableForm;