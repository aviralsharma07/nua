// import * as React from "react";
// import PropTypes from "prop-types";
// import { alpha } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import TableSortLabel from "@mui/material/TableSortLabel";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import { visuallyHidden } from "@mui/utils";

// function createData(id, ratings_average, author_name, title, first_publish_year, subject, author_birth_date, author_top_work) {
//   return {
//     id,
//     ratings_average,
//     author_name,
//     title,
//     first_publish_year,
//     subject,
//     author_birth_date,
//     author_top_work,
//   };
// }

// const rows = [
//   createData(1, 4.5, "Author A", "Book Title A", 1999, "Fiction", "1950-01-01", "Top Work A"),
//   createData(2, 3.8, "Author B", "Book Title B", 2005, "Non-Fiction", "1965-02-12", "Top Work B"),
//   createData(3, 4.2, "Author C", "Book Title C", 2010, "Fiction", "1970-03-22", "Top Work C"),
//   createData(4, 4.0, "Author D", "Book Title D", 2015, "Science", "1980-04-15", "Top Work D"),
//   createData(5, 4.7, "Author E", "Book Title E", 2020, "History", "1990-05-30", "Top Work E"),
//   createData(6, 3.6, "Author F", "Book Title F", 1995, "Biography", "1955-06-05", "Top Work F"),
//   createData(7, 4.8, "Author G", "Book Title G", 1988, "Fantasy", "1945-07-10", "Top Work G"),
//   createData(8, 3.9, "Author H", "Book Title H", 2000, "Romance", "1960-08-20", "Top Work H"),
//   createData(9, 4.3, "Author I", "Book Title I", 2018, "Mystery", "1975-09-25", "Top Work I"),
//   createData(10, 3.5, "Author J", "Book Title J", 1992, "Adventure", "1935-10-10", "Top Work J"),
//   createData(11, 4.6, "Author K", "Book Title K", 1985, "Science Fiction", "1925-11-15", "Top Work K"),
//   createData(12, 3.7, "Author L", "Book Title L", 2011, "Horror", "1985-12-25", "Top Work L"),
//   createData(13, 4.1, "Author M", "Book Title M", 2016, "Thriller", "1970-01-01", "Top Work M"),
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: "ratings_average",
//     numeric: true,
//     disablePadding: false,
//     label: "Ratings Average",
//   },
//   {
//     id: "author_name",
//     numeric: false,
//     disablePadding: false,
//     label: "Author Name",
//   },
//   {
//     id: "title",
//     numeric: false,
//     disablePadding: false,
//     label: "Title",
//   },
//   {
//     id: "first_publish_year",
//     numeric: true,
//     disablePadding: false,
//     label: "First Publish Year",
//   },
//   {
//     id: "subject",
//     numeric: false,
//     disablePadding: false,
//     label: "Subject",
//   },
//   {
//     id: "author_birth_date",
//     numeric: false,
//     disablePadding: false,
//     label: "Author Birth Date",
//   },
//   {
//     id: "author_top_work",
//     numeric: false,
//     disablePadding: false,
//     label: "Author Top Work",
//   },
// ];

// function EnhancedTableHead(props) {
//   const { order, orderBy, onRequestSort } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         {headCells.map((headCell) => (
//           <TableCell key={headCell.id} align={headCell.numeric ? "right" : "left"} padding={headCell.disablePadding ? "none" : "normal"} sortDirection={orderBy === headCell.id ? order : false}>
//             <TableSortLabel active={orderBy === headCell.id} direction={orderBy === headCell.id ? order : "asc"} onClick={createSortHandler(headCell.id)}>
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === "desc" ? "sorted descending" : "sorted ascending"}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   onRequestSort: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(["asc", "desc"]).isRequired,
//   orderBy: PropTypes.string.isRequired,
// };

// function EnhancedTableToolbar() {
//   return (
//     <Toolbar>
//       <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
//         Books
//       </Typography>
//       <Tooltip title="Filter list">
//         <IconButton>
//           <FilterListIcon />
//         </IconButton>
//       </Tooltip>
//     </Toolbar>
//   );
// }

// export default function EnhancedTable() {
//   const [order, setOrder] = React.useState("asc");
//   const [orderBy, setOrderBy] = React.useState("ratings_average");
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const visibleRows = React.useMemo(() => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage), [order, orderBy, page, rowsPerPage]);

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Paper sx={{ width: "100%", mb: 2 }}>
//         <EnhancedTableToolbar />
//         <TableContainer sx={{ maxHeight: 440 }}>
//           <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 750 }}>
//             <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
//             <TableBody>
//               {visibleRows.map((row, index) => {
//                 const labelId = `enhanced-table-checkbox-${index}`;

//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
//                     <TableCell align="right">{row.ratings_average}</TableCell>
//                     <TableCell align="left">{row.author_name}</TableCell>
//                     <TableCell align="left">{row.title}</TableCell>
//                     <TableCell align="right">{row.first_publish_year}</TableCell>
//                     <TableCell align="left">{row.subject}</TableCell>
//                     <TableCell align="left">{row.author_birth_date}</TableCell>
//                     <TableCell align="left">{row.author_top_work}</TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination rowsPerPageOptions={[10, 50, 100]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
//       </Paper>
//     </Box>
//   );
// }

import * as React from "react";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, IconButton, Tooltip } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import { visuallyHidden } from "@mui/utils";

const headCells = [
  { id: "ratings_average", numeric: true, disablePadding: false, label: "Ratings Average" },
  { id: "author_name", numeric: false, disablePadding: false, label: "Author Name" },
  { id: "title", numeric: false, disablePadding: false, label: "Title" },
  { id: "first_publish_year", numeric: true, disablePadding: false, label: "First Publish Year" },
  { id: "subject", numeric: false, disablePadding: false, label: "Subject" },
  { id: "author_birth_date", numeric: false, disablePadding: false, label: "Author Birth Date" },
  { id: "author_top_work", numeric: false, disablePadding: false, label: "Author Top Work" },
];

const createData = (id, ratings_average, author_name, title, first_publish_year, subject, author_birth_date, author_top_work) => {
  return { id, ratings_average, author_name, title, first_publish_year, subject, author_birth_date, author_top_work };
};

const rows = [
  createData(1, 4.5, "Author A", "Book Title A", 1999, "Fiction", "1950-01-01", "Top Work A"),
  createData(2, 3.8, "Author B", "Book Title B", 2005, "Non-Fiction", "1965-02-12", "Top Work B"),
  createData(3, 4.2, "Author C", "Book Title C", 2010, "Fiction", "1970-03-22", "Top Work C"),
  createData(4, 4.0, "Author D", "Book Title D", 2015, "Science", "1980-04-15", "Top Work D"),
  createData(5, 4.7, "Author E", "Book Title E", 2020, "History", "1990-05-30", "Top Work E"),
  createData(6, 3.6, "Author F", "Book Title F", 1995, "Biography", "1955-06-05", "Top Work F"),
  createData(7, 4.8, "Author G", "Book Title G", 1988, "Fantasy", "1945-07-10", "Top Work G"),
  createData(8, 3.9, "Author H", "Book Title H", 2000, "Romance", "1960-08-20", "Top Work H"),
  createData(9, 4.3, "Author I", "Book Title I", 2018, "Mystery", "1975-09-25", "Top Work I"),
  createData(10, 3.5, "Author J", "Book Title J", 1992, "Adventure", "1935-10-10", "Top Work J"),
  createData(11, 4.6, "Author K", "Book Title K", 1985, "Science Fiction", "1925-11-15", "Top Work K"),
  createData(12, 3.7, "Author L", "Book Title L", 2011, "Horror", "1985-12-25", "Top Work L"),
  createData(13, 4.1, "Author M", "Book Title M", 2016, "Thriller", "1970-01-01", "Top Work M"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.numeric ? "right" : "left"} padding={headCell.disablePadding ? "none" : "normal"} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel active={orderBy === headCell.id} direction={orderBy === headCell.id ? order : "asc"} onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

function EnhancedTableToolbar() {
  return (
    <Toolbar>
      <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
        Books
      </Typography>
      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

export default function EnhancedTable({ searchQuery }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("ratings_average");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRows = rows.filter((row) => row.author_name && row.author_name.toLowerCase().includes(searchQuery.toLowerCase()));

  const sortedRows = stableSort(filteredRows, getComparator(order, orderBy));

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table stickyHeader aria-labelledby="tableTitle" size="medium">
            <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
            <TableBody>
              {sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.id}>
                    <TableCell align="right">{row.ratings_average}</TableCell>
                    <TableCell align="left">{row.author_name}</TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="right">{row.first_publish_year}</TableCell>
                    <TableCell align="left">{row.subject}</TableCell>
                    <TableCell align="left">{row.author_birth_date}</TableCell>
                    <TableCell align="left">{row.author_top_work}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination rowsPerPageOptions={[10, 50, 100]} component="div" count={filteredRows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
      </Paper>
    </Box>
  );
}
