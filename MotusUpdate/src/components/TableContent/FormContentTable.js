import React, {Component} from 'react';
import FCTableRow from './FCTableRow';

class FormContentTable extends Component {

    render() {
        const{ items,tableName } = this.props;
        const itemKeys=Object.keys(items);
        return (

                <div className="tableData">
                <h3>{tableName}</h3>

                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>

                    </tr>
                    {
                        itemKeys.map(item=> {
                                return (
                                    <FCTableRow name={item} key={item} value={items[item]}/>
                                )

                            }
                        )
                    }
                    </tbody>

                </table>
                </div>

        );
    }
}

export default FormContentTable;