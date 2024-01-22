// App.js
import React from 'react';
import HeaderTable from './components/HeaderTable';
import DetailTable from './components/DetailTable';
import { HeaderData } from './Data/Header';
import { DetailsData } from './Data/Details';


const App = () => {
  return (
    <div>
      <HeaderTable data={HeaderData} />
      <DetailTable details={DetailsData} />
    </div>
  );
};

export default App;
