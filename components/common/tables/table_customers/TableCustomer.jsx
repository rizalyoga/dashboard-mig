import React, { useState, useEffect } from "react";
import styles from "./TableCustomer.module.scss";
import { columns } from "./headerTable";

// MaterialUI
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const TableCustomer = ({ search, filter, dataCustomers }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    if (search.length > 0) {
      setPage(0);
      setRowsPerPage(100);
    } else {
      setRowsPerPage(10);
    }
  }, [search]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataCustomers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((customer, idx) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={customer.id}
                  >
                    <TableCell align={"center"}>{idx + 1}</TableCell>
                    <TableCell align={"center"}>{customer.name}</TableCell>
                    <TableCell align={"center"}>
                      {customer.phone_number}
                    </TableCell>
                    <TableCell align={"center"}>
                      <p>{customer.address}</p>
                      <p className={styles.country}>{customer.country}</p>
                    </TableCell>
                    <TableCell align={"center"}>{customer.job_title}</TableCell>
                    <TableCell align={"center"}>
                      {customer.status ? (
                        <p className={styles.active}>Active</p>
                      ) : (
                        <p className={styles.non_active}>Non Active</p>
                      )}
                    </TableCell>
                    <TableCell align={"center"}>
                      <div className={styles.action}>
                        <p className={styles.action_edit}>Edit</p>
                        <p className={styles.action_delete}>Delete</p>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={dataCustomers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableCustomer;