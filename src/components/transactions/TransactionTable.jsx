import transactionsData from "./transactions.json";
import * as React from "react";
import { useTable, usePagination } from "react-table";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosInformationCircleOutline,
  IoMdArrowDropdown,
} from "react-icons/io";

function TransactionTable() {
  const data = React.useMemo(() => transactionsData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Order ID",
        accessor: "order_id",
      },
      {
        Header: "Order Date",
        accessor: "order_date",
        icon: <IoMdArrowDropdown />,
      },
      {
        Header: "Order Amount",
        accessor: "order_amount",
      },
      {
        Header: "Transaction Fees",
        accessor: "transaction_fee",
        icon: <IoIosInformationCircleOutline />,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex },
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 20 } },
    usePagination
  );

  return (
    <div>
      <table {...getTableProps()} className="w-full">
        <thead className="w-full my-[40px] px[12px] py-[10px]">
          {headerGroups.map((headerGroup, idx) => (
            <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, idx) => (
                <th
                  key={idx}
                  {...column.getHeaderProps()}
                  className="text-left"
                >
                  <div
                    className={`flex flex-row items-center ${
                      column.render("Header") === "Order Amount" ||
                      column.render("Header") === "Transaction Fees"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {column.render("Header")}
                    {column.icon && <span className="ml-1">{column.icon}</span>}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, idx) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={idx} className=" ">
                {row.cells.map((cell, idx) => (
                  <td
                    key={idx}
                    {...cell.getCellProps()}
                    className={`${
                      cell.column.id === "order_id" ? "text-primary" : ""
                    } 
                    ${
                      cell.column.Header === "Order Amount" ||
                      cell.column.Header === "Transaction Fees"
                        ? "text-right"
                        : "text-left"
                    }
                    `}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="w-full flex flex-row justify-center items-center pagination my-[24px]">
        <button
          className="bg-white rounded px-[12px] py-[6px] border-black/60 text-black/30 border cursor-pointer flex flex-row items-center mr-2"
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          <IoIosArrowBack />
          Previous
        </button>

        <div>
          {pageOptions.map((page, index) => (
            <button
              key={index}
              onClick={() => gotoPage(index)}
              className={`${
                pageIndex === index ? "bg-primary text-white" : "text-black"
              } px-[10px] py-1 text-[14px] rounded`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="bg-white rounded px-[12px] py-[6px] border-black/60 text-black/30 border cursor-pointer flex flex-row items-center ml-2"
          onClick={nextPage}
          disabled={!canNextPage}
        >
          Next <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default TransactionTable;
