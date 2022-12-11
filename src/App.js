import React from 'react';
import DataTable from './DataTable';

const App = () => {
  const data = [
    { id: 1, first_name: 'John',last_name:'O Connell', email: 'loconnell0@hao123.com',gender:'Male',ip_address:'163.42.164.152' },
    { id: 2, first_name: 'Nikolos',last_name:'Botler', email: 'nbotler1@wikipedia.org',gender:'Male',ip_address:'116.251.170.231' },
    { id: 3, first_name: 'Burgess',last_name:'Caddens', email: 'bcaddens2@accuweather.com',gender:'Polygender',ip_address:'126.177.211.243' },
  ];

  const columns = [
    { id: 'first_name', label: 'first_name' },
    { id: 'last_name', label: 'last_name' },
    { id: 'email', label: 'email' },
    { id: 'gender', label: 'gender' },
    { id: 'ip_address', label: 'ip_address' },
  ];

  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default App;