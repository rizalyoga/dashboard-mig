import React, { useState } from "react";
import styles from "./TableCustomer.module.scss";

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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns = [
    { id: "no", label: "No", minWidth: 10, align: "center" },
    { id: "name", label: "Name", minWidth: 130, align: "center" },
    { id: "phone_number", label: "Phone", minWidth: 150, align: "center" },
    { id: "address", label: "Address", minWidth: 100, align: "center" },
    {
      id: "job_title",
      label: "Job",
      minWidth: 170,
      align: "center",
    },
    {
      id: "status",
      label: "Status",
      minWidth: 150,
      align: "center",
      format: (value) => (value == true ? "Active" : "Non Active"),
    },
    {
      id: "action",
      label: "Action",
      minWidth: 170,
      align: "center",
    },
  ];

  const data = [
    {
      id: 2095,
      name: "Noble Mosciski",
      address: "414 Fahey Harbor\nWarrenborough, RI 68406",
      country: "Cook Islands",
      phone_number: "929-619-3706",
      job_title: "Stone Cutter",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2094,
      name: "Myrna Harris",
      address: "5173 Gail Fork\nZboncakhaven, NE 82998-6447",
      country: "Egypt",
      phone_number: "(786) 836-6324",
      job_title: "Animal Control Worker",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2093,
      name: "Kennedy Lakin",
      address: "2213 Hegmann Estate Suite 976\nWest Uriel, GA 61817",
      country: "Western Sahara",
      phone_number: "+1-240-591-0542",
      job_title: "Legislator",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2092,
      name: "Adrianna Morissette",
      address: "41952 Gutkowski Fork Apt. 434\nDanielhaven, OR 37637-2486",
      country: "Guinea-Bissau",
      phone_number: "305-451-3305",
      job_title: "Machinery Maintenance",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2091,
      name: "Prof. Keegan Kreiger Sr.",
      address: "45723 Mckayla Valley Apt. 890\nSonnyville, NH 02461-0494",
      country: "Madagascar",
      phone_number: "(605) 729-5652",
      job_title: "Private Detective and Investigator",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2090,
      name: "Aaliyah Spencer",
      address: "156 Donny Walks Suite 422\nStoltenbergshire, MN 57060",
      country: "Philippines",
      phone_number: "+1 (707) 217-9114",
      job_title: "Fabric Mender",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2089,
      name: "Nicolas Willms Jr.",
      address: "937 Fisher Spurs\nEast Larissafurt, ME 05848",
      country: "Tuvalu",
      phone_number: "+1-864-562-4608",
      job_title: "Exhibit Designer",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2088,
      name: "Genevieve Spinka",
      address: "16912 Aiyana Shoals\nRoderickborough, NM 70094-9842",
      country: "Jersey",
      phone_number: "1-585-863-2889",
      job_title: "Legislator",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2087,
      name: "Arlo Abshire",
      address: "92931 Lurline Cape Suite 421\nNorth Destinberg, NV 65635",
      country: "Austria",
      phone_number: "+1-475-790-0654",
      job_title: "Communication Equipment Worker",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2086,
      name: "Mr. Brando Rosenbaum",
      address: "377 Cordie Pike\nCamrenside, LA 33283",
      country: "El Salvador",
      phone_number: "(520) 891-8570",
      job_title: "Heaters",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2085,
      name: "Connie Labadie",
      address: "8593 Ezequiel Neck\nWilkinsonberg, CT 29927-5269",
      country: "Montserrat",
      phone_number: "283.857.9896",
      job_title: "Park Naturalist",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2084,
      name: "Krystal Ullrich",
      address: "6627 Pearl Turnpike\nDaughertyland, OK 80770-4204",
      country: "Estonia",
      phone_number: "(320) 964-1144",
      job_title: "Heaters",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2083,
      name: "Prof. Judd Bahringer",
      address: "41173 Feil Trail Apt. 277\nEast Cheyenne, SD 89346",
      country: "Ethiopia",
      phone_number: "386-555-0550",
      job_title: "Fraud Investigator",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2082,
      name: "Ludwig Gulgowski",
      address: "965 Allison Mountain\nMarcelomouth, NH 47231-4145",
      country: "Wallis and Futuna",
      phone_number: "570-769-7753",
      job_title: "Purchasing Agent",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2081,
      name: "Wellington Spinka PhD",
      address: "981 Carter Unions Suite 486\nEast Antonette, VA 71628-0991",
      country: "Poland",
      phone_number: "(820) 295-5097",
      job_title: "Patrol Officer",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2080,
      name: "Kory Lehner",
      address: "970 Wunsch Port Suite 853\nWillmsport, CA 91946",
      country: "Russian Federation",
      phone_number: "+1-680-479-2237",
      job_title: "Machine Operator",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2079,
      name: "Antwon Langosh IV",
      address: "48734 Howell Ramp Apt. 347\nLake Herminia, MI 84724",
      country: "Bosnia and Herzegovina",
      phone_number: "240-682-7170",
      job_title: "Sociology Teacher",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2078,
      name: "Bert Fadel",
      address: "664 Bonnie Court\nWest Cotyland, MI 46936-7716",
      country: "Tokelau",
      phone_number: "(214) 591-1803",
      job_title: "Earth Driller",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2077,
      name: "Peter Cruickshank",
      address: "7498 Rosalind Road\nLake Barrychester, VA 42801-6946",
      country: "Argentina",
      phone_number: "+15866529940",
      job_title: "Metal Molding Operator",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2076,
      name: "Tommie Satterfield",
      address: "15992 Nelda Roads\nSouth Gracieland, UT 25578-5629",
      country: "Taiwan",
      phone_number: "+17638081244",
      job_title: "Film Laboratory Technician",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2075,
      name: "Dr. Alfredo Gusikowski V",
      address: "40787 Pfannerstill Branch\nNorth Kayleymouth, CO 46024",
      country: "Samoa",
      phone_number: "(928) 412-7674",
      job_title: "Agricultural Engineer",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2074,
      name: "Coby Yundt PhD",
      address: "9435 Dennis Run Suite 843\nCletashire, NC 84894-8275",
      country: "Pitcairn Islands",
      phone_number: "463-587-2253",
      job_title: "Locksmith",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2073,
      name: "Mr. Abner Rohan",
      address: "706 Jovani Pines\nArnaldoview, ME 16075",
      country: "Netherlands",
      phone_number: "971.693.6990",
      job_title: "Timing Device Assemblers",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2072,
      name: "Leda Gutmann MD",
      address: "60320 Rylan Shoal Apt. 186\nLake Francescoside, MO 88689",
      country: "Oman",
      phone_number: "(423) 970-7061",
      job_title: "Preschool Education Administrators",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2071,
      name: "Ms. Francesca Lockman",
      address: "90758 Jacobs Mission\nCheyannefort, NC 78496",
      country: "Uruguay",
      phone_number: "941.479.2938",
      job_title: "Microbiologist",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2070,
      name: "Mrs. Lacy Kris MD",
      address: "738 Wilma Prairie Apt. 105\nSouth Ozella, NV 52866-4792",
      country: "Tunisia",
      phone_number: "+15097404022",
      job_title: "Municipal Fire Fighter",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2069,
      name: "Kathleen O'Connell IV",
      address: "6661 Shayna Flats\nNorth Oswald, KY 72083-1625",
      country: "Saint Lucia",
      phone_number: "828.450.9742",
      job_title: "City",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2068,
      name: "Gerard Botsford",
      address: "78283 Kristofer Glen Apt. 628\nSouth Elaina, MO 64953",
      country: "Gambia",
      phone_number: "239-570-3982",
      job_title: "Food Batchmaker",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2067,
      name: "Ardith Schmitt",
      address: "494 Aric Stravenue\nEstherstad, WV 76955-0406",
      country: "Dominica",
      phone_number: "(347) 854-1941",
      job_title: "Plastic Molding Machine Operator",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2066,
      name: "Prof. Myles Bayer III",
      address: "445 Moen Camp Apt. 624\nHowellhaven, RI 98214-3736",
      country: "Malawi",
      phone_number: "+1.317.335.6612",
      job_title: "Director Of Marketing",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2065,
      name: "Percival Cummings",
      address: "33773 Crist Course\nPort Gilbertofort, WY 06167-1888",
      country: "Morocco",
      phone_number: "651.563.3714",
      job_title: "Material Moving Worker",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2064,
      name: "Roderick Brakus",
      address: "4801 Penelope Island Suite 105\nSerenityhaven, MS 09379-5726",
      country: "South Georgia and the South Sandwich Islands",
      phone_number: "706-635-8889",
      job_title: "Welding Machine Setter",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2063,
      name: "Prof. Gillian McLaughlin",
      address: "551 Reinger Plaza\nDevynview, MD 50310",
      country: "Lao People's Democratic Republic",
      phone_number: "561.212.3304",
      job_title: "Architecture Teacher",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2062,
      name: "Bertrand Parisian",
      address: "856 Trycia Orchard Suite 080\nSouth Jana, LA 39277-4998",
      country: "Isle of Man",
      phone_number: "1-920-947-7435",
      job_title: "Airline Pilot OR Copilot OR Flight Engineer",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2061,
      name: "Ms. Genevieve Kihn Jr.",
      address: "4491 Bartell Underpass Apt. 195\nBernieceton, AK 57989-0459",
      country: "Uganda",
      phone_number: "1-747-628-2849",
      job_title: "Pharmacist",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2060,
      name: "Lorenz DuBuque",
      address: "248 Esperanza Pines\nCasperfort, NM 08058",
      country: "Hong Kong",
      phone_number: "+1-737-729-6882",
      job_title: "Mechanical Inspector",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2059,
      name: "Tatum Lang",
      address: "9483 Klein Union Suite 816\nEast Aglaeburgh, VA 96949",
      country: "Mozambique",
      phone_number: "1-516-532-6667",
      job_title: "Soldering Machine Setter",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2058,
      name: "Rosalinda Glover",
      address:
        "9428 Kuhic Mountains Apt. 319\nSouth Jeffereyberg, IL 33440-5984",
      country: "Denmark",
      phone_number: "682-349-1128",
      job_title: "Sketch Artist",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2057,
      name: "Madeline Douglas",
      address: "421 Kassandra Passage\nRomaguerastad, AZ 32787",
      country: "Bermuda",
      phone_number: "914.237.0762",
      job_title: "Precision Dyer",
      status: true,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
    {
      id: 2056,
      name: "Marquis Beier",
      address: "2388 Orn Plaza Suite 867\nSchinnerborough, KY 64887-1544",
      country: "Ireland",
      phone_number: "+13513025806",
      job_title: "Paving Equipment Operator",
      status: false,
      created_at: "2022-05-31T08:43:13.000000Z",
      updated_at: "2022-05-31T08:43:13.000000Z",
    },
  ];

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
            {data
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
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableCustomer;
