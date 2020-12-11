  
import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>
          Delete
        </button>
      </div>
    )
  }
};

export default Band;
// import React, { Component } from 'react';

// class Band extends Component {

//   render() {
//     return(
//       <li>
//         <span>{this.props.band.name}</span>
//         <button onClick={() => this.props.deleteBand(this.props.band.id)}>DELETE BAND</button>
//       </li>
//     );
//   }
// };

// export default Band;
