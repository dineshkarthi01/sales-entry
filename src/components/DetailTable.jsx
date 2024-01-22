// DetailTable.js
import React from 'react';

const DetailTable = ({ details }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th> {/* Empty space */}
            <th>details_table</th> {/* New column */}
            <th>vr_no</th>
            <th>sr_no</th>
            <th>item_code</th>
            <th>item_name</th>
            <th>description</th>
            <th>qty</th>
            <th>rate</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.sr_no}>
              <td></td> {/* Empty space */}
              <td></td> {/* Data for the new column */}
              <td>{detail.vr_no}</td>
              <td>{detail.sr_no}</td>
              <td>{detail.item_code}</td>
              <td>{detail.item_name}</td>
              <td>{detail.description}</td>
              <td>{detail.qty}</td>
              <td>{detail.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailTable;
