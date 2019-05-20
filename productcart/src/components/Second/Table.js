import React, { Component } from 'react';
class WineryTable extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
        <table >
        <tbody>
        
        <tr>
          <th>ITEM</th>
          <th>QTY</th>
          <th colSpan="2">PRICE</th>
          
          
        </tr>
       <tr>
        <td>1</td>
          <td>1</td>
          
         <td >1</td>
        <td ><i className="fas fa-times"></i></td>
        </tr>
        </tbody>
      </table>

        </div>

         );
    }
}
 
export default WineryTable;