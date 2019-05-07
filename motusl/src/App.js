import React from 'react';
import Header from './components/Header';
// import CompanyDetails from './components/addCompanyinfo/CompanyDetails';
import NewCustomer from './components/NewCustomer/NewCustomer';
// import AssignProduct from './components/assignProduct/AssignProduct';
import Master from './components/Master';
import Footer from './components/Footer'
import './sass/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NewCustomer/>
      
    <Master/>
    <Footer/>
    </div>
  );
}

export default App;