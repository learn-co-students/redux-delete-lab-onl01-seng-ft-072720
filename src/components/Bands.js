import React from 'react';
import Band from './Band'

const Bands = props => {
  const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)

  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands;
// import React, { Component } from 'react'
// import Band from './Band'

// export default class Bands extends Component {
//     render() {
//         return (
//         <ul>
//             {this.props.bands.map(band => {
//                 return (
//                     <Band key={band.id} band={band} deleteBand={this.props.deleteBand} />
//                 )
//             })}
//         </ul>
//         )
//     }
// }