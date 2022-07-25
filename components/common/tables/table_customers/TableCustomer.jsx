import React, { useState, useEffect } from "react";
import styles from "./TableCustomer.module.scss";
import { columns } from "./headerTable";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

// API
import { deleteCustomer } from "@/utils/api/customers";

// MaterialUI
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const TableCustomer = ({ search, dataCustomers }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const router = useRouter();

  // Set table page & total-list
  useEffect(() => {
    if (search.length > 0) {
      setPage(0);
      setRowsPerPage(100);
    } else {
      setRowsPerPage(10);
    }
  }, [search]);

  // Set Pagination Function
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Move to Edit page
  const toEditPage = (id) => {
    router.push(`/customers/edit/${id}`);
  };

  // Delete Customer
  const delCustomer = (id) => {
    Swal.fire({
      text: "Are you sure to Delete ?",
      color: "rgb(83,83,83)",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e61b47",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        const token = Cookies.get("userAuth");
        const payload = {
          id: id,
        };

        deleteCustomer(payload, token).then((res) => {
          Swal.fire({
            icon: res.success ? "success" : "error",
            text: `${res.message}`,
          });
          router.push("/customers");
        });
      }
    });
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
              .sort((a, b) => a.name.localeCompare(b.name))
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
                        <p
                          className={styles.action_edit}
                          onClick={() => toEditPage(customer.id)}
                        >
                          Edit
                        </p>
                        <p
                          className={styles.action_delete}
                          onClick={() => delCustomer(customer.id)}
                        >
                          Delete
                        </p>
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
