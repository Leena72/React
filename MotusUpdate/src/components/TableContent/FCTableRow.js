import React from 'react';

function FCTableRow(props){
    const { name, value } = props;
    return (
        <tr>
            <td>{ name }</td>
            <td>{ value }</td>

        </tr>
    )
}

export default FCTableRow;