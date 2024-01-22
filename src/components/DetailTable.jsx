// DetailTable.js
import React, { useState } from 'react';

const DetailTable = ({ details, onAddRow, onRemoveRow }) => {
  const [newDetail, setNewDetail] = useState({
    vr_no: '',
    sr_no: '',
    item_code: '',
    item_name: '',
    description: '',
    qty: '',
    rate: '',
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setNewDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const handleAddRow = () => {
    onAddRow(newDetail);
    setNewDetail({
      vr_no: '',
      sr_no: '',
      item_code: '',
      item_name: '',
      description: '',
      qty: '',
      rate: '',
    });
  };

  return (
    <div>
      <h2>Details</h2>
      <table>
        <thead>
          <tr>
            <th></th> {/* Empty space */}
            <th>vr_no</th>
            <th>sr_no</th>
            <th>item_code</th>
            <th>item_name</th>
            <th>description</th>
            <th>qty</th>
            <th>rate</th>
            <th>Action</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td></td> {/* Empty space */}
              <td>{detail.vr_no}</td>
              <td>{detail.sr_no}</td>
              <td>{detail.item_code}</td>
              <td>{detail.item_name}</td>
              <td>{detail.description}</td>
              <td>{detail.qty}</td>
              <td>{detail.rate}</td>
              <td>
                <button onClick={() => onRemoveRow(index)}>Remove</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td> {/* Empty space */}
            <td>
              <input
                type="text"
                name="vr_no"
                value={newDetail.vr_no}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="sr_no"
                value={newDetail.sr_no}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="item_code"
                value={newDetail.item_code}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="item_name"
                value={newDetail.item_name}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="description"
                value={newDetail.description}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="qty"
                value={newDetail.qty}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              <input
                type="text"
                name="rate"
                value={newDetail.rate}
                onChange={(e) => handleInputChange(e)}
              />
            </td>
            <td>
              <button onClick={handleAddRow}>Add Row</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailTable;
