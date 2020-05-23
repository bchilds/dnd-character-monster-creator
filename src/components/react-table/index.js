import React from "react";
import PropTypes from "prop-types";
import { useTable } from "react-table";
import clsx from "clsx";
import style from "./style.module.scss";

function PreformattedTable({ columns, data, classNames }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <div className={clsx(style["table-wrapper"], classNames)}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

PreformattedTable.propTypes = {
  classNames: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.array,
};

PreformattedTable.defaultProps = {
  classNames: "",
  data: null,
  columns: null,
};

export default PreformattedTable;
