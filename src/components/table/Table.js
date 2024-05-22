import * as React from "react";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, IconButton, Tooltip } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import { visuallyHidden } from "@mui/utils";
import { useState, useEffect } from "react";

const headCells = [
  { id: "ratings_average", numeric: true, disablePadding: false, label: "Ratings Average" },
  { id: "author_name", numeric: false, disablePadding: false, label: "Author Name" },
  { id: "title", numeric: false, disablePadding: false, label: "Title" },
  { id: "first_publish_year", numeric: true, disablePadding: false, label: "First Publish Year" },
  { id: "subject", numeric: false, disablePadding: false, label: "Subject" },
  { id: "author_birth_date", numeric: false, disablePadding: false, label: "Author Birth Date" },
  { id: "author_top_work", numeric: false, disablePadding: false, label: "Author Top Work" },
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
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");

  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         const data = await response.json();
  //         const books = data.docs;
  //         console.log("data: ", data);
  //         console.log(books[0]);

  //         // const authorRes = await fetch(`https://openlibrary.org/search/authors.json?q=${books[0].author_name}`);
  //         // const authorRes = await fetch(`https://openlibrary.org/authors/${books[0].author_key[0]}.json`);
  //         // const authorData = await authorRes.json();
  //         // console.log("authorRes: ", authorData);

  //         books.forEach((book) => {
  //           fetchAuthorData(book.author_name);
  //         });

  //         setRows(books);
  //         setLoading(false);
  //       } catch (error) {
  //         setError(error);
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  //   const fetchAuthorData = async (authorName) => {
  //     try {
  //       const authorRes = await fetch(`https://openlibrary.org/search/authors.json?q=${authorName}`);
  //       const authorData = await authorRes.json();
  //       console.log("authorRes: ", authorData);
  //       const birthDate = authorData.docs[0].birth_date;
  //       const topWork = authorData.docs[0].top_work;
  //       console.log("birthDate: ", birthDate);
  //       console.log("topWork: ", topWork);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const books = data.docs;
        // console.log("data: ", data);
        // console.log(books[0]);

        const updatedBooks = await Promise.all(books.map((book) => fetchAuthorData(book)));
        setRows(updatedBooks);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchAuthorData = async (book) => {
    try {
      const authorRes = await fetch(`https://openlibrary.org/search/authors.json?q=${book.author_name}`);
      const authorData = await authorRes.json();
      //   console.log("authorRes: ", authorData);
      const birthDate = authorData.docs[0].birth_date;
      const topWork = authorData.docs[0].top_work;
      //   console.log("birthDate: ", birthDate);
      //   console.log("topWork: ", topWork);

      return { ...book, author_birth_date: birthDate, author_top_work: topWork };
    } catch (error) {
      console.error(error);
      // Return the original book object if fetching author data fails
      return book;
    }
  };

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

  //   console.log("searchquery: ", searchQuery);

  const filteredRows = searchQuery ? rows.filter((row) => Array.isArray(row.author_name) && typeof row.author_name[0] === "string" && row.author_name[0].toLowerCase().includes(searchQuery.toLowerCase())) : rows;

  console.log("filtered: ", filteredRows);

  const sortedRows = stableSort(filteredRows, getComparator(order, orderBy));

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer sx={{ maxHeight: 440 }}>
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
                    <TableCell align="left">{row.subject?.slice(0, 2).join(", ")}</TableCell>
                    <TableCell align="left">{row.author_birth_date}</TableCell>
                    <TableCell align="left">{row.author_top_work}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination rowsPerPageOptions={[10, 25, 50, 100]} component="div" count={sortedRows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
      </Paper>
    </Box>
  );
}
