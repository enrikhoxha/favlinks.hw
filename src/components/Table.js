import React from 'react'

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Name&emsp;&emsp;&emsp;</th> 
        <th>&emsp;&emsp;&emsp;&emsp;&emsp;URL&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</th> 
        <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props
  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{row.linkname}</td>
        <td>
        &emsp;&emsp;&emsp;<a href={row.url}>{row.url}</a>
        </td>
        <td>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <button onClick={() => props.removeLink(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  {
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    return (
      <table> 
      <TableHeader /> 
      <TableBody linkData={props.linkData} removeLink={props.removeLink} /> 
      </table>)
  }
};

export default Table;
