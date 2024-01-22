// HeaderTable.js
import React from 'react';

const HeaderTable = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th> {/* Empty space */}
            <th>header_table</th> {/* New column */}
            <th>vr_no</th>
            <th>vr_date</th>
            <th>ac_name</th>
            <th>ac_amt</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.vr_no}>
              <td></td> {/* Empty space */}
              <td></td> {/* Data for the new column */}
              <td>{item.vr_no}</td>
              <td>{item.vr_date}</td>
              <td>{item.ac_name}</td>
              <td>{item.ac_amt}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeaderTable;
