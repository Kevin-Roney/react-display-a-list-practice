import React from 'react';
import CustomerItem from './CustomerItem';

export default function CustomerList({ customers }) {
  return (
    <div className='customer-list'>
      {
        customers.map((customer) => <CustomerItem key={customer._id} customers={customer} />)
      }
    </div>
  );
}
