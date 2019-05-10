import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormContentTable from './TableContent/FormContentTable';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { company, product, admin } = this.props;
    const adminTemp={...admin};
    delete adminTemp.inputarray

  
    return (
      <div>
        <FormContentTable items={company} tableName="Company Table" />
        <FormContentTable items={product} tableName="Product Table" />
        <FormContentTable items={adminTemp} tableName="Admin Table" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  company: state.company,
  product: state.product,
  admin: state.admin

})


export default connect(mapStateToProps)(Customer);