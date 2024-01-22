// App.js
import React, { useState } from 'react';
import HeaderTable from './components/HeaderTable';
import DetailTable from './components/DetailTable';
import { HeaderData } from "./Data/Header";
import { DetailsData } from "./Data/Details"


const App = () => {
  const [details, setDetails] = useState(DetailsData);

  const handleAddRow = (newDetail) => {
    setDetails((prevDetails) => [...prevDetails, newDetail]);
  };

  const handleRemoveRow = (index) => {
    setDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails.splice(index, 1);
      return newDetails;
    });
  };

  return (
    <div>
      <HeaderTable data={HeaderData} />
      <DetailTable
        details={details}
        onAddRow={handleAddRow}
        onRemoveRow={handleRemoveRow}
      />
      {/* Add a button for printing the voucher */}
      <button onClick={() => console.log('Print Voucher')}>Print Voucher</button>
    </div>
  );
};

export default App;
