// import React, { useState } from "react";
// import Table from "../table/Table";
// import { AppBar, Toolbar, Typography, Box, TextField, Avatar } from "@mui/material";

// const Dashboard = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Dashboard
//           </Typography>
//           <TextField variant="outlined" size="small" placeholder="Search by author" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} sx={{ backgroundColor: "white", borderRadius: 1, marginRight: 2 }} />
//           <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
//           <Typography variant="body1" component="div" sx={{ marginLeft: 2 }}>
//             Hello, User!
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ padding: 2 }}>
//         <Table searchQuery={searchQuery} />
//       </Box>
//       <footer style={{ textAlign: "center", padding: "10px", marginTop: "20px" }}>
//         <Typography variant="body2">
//           Crafted by Aviral. Check the project on <a href="https://github.com/your-repo-link">GitHub</a>.
//         </Typography>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import Table from "../table/Table";
import { AppBar, Toolbar, Typography, Box, TextField, Avatar, Container, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FirebaseContext } from "../../context/Firebase";
import { useContext } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Set this to the color you want for both header and footer
    },
  },
});

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { logOut } = useContext(FirebaseContext);

  const handleSignOut = async () => {
    await logOut();
    console.log("Sign Out Successfully");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            {/* <Button color="inherit" onClick={handleSignOut} > */}
            <Button
              color="inherit"
              onClick={handleSignOut}
              sx={{
                marginRight: 2,
                // backgroundColor: isLoggingOut ? "rgba(255, 255, 255, 0.5)" : "transparent",
                // "&:hover": {
                //   backgroundColor: "rgba(255, 255, 255, 0.8)",
                // },
              }}
            >
              Logout
            </Button>
            <TextField variant="outlined" size="small" placeholder="Search by author" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} sx={{ backgroundColor: "white", borderRadius: 1, marginRight: 2 }} />
            <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
            <Typography variant="body1" component="div" sx={{ marginLeft: 2 }}>
              Hello, User!
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={{ flexGrow: 1, mt: 2, mb: 2 }}>
          <Table searchQuery={searchQuery} />
        </Container>
        <Box component="footer" sx={{ bgcolor: "primary.main", p: 2, mt: "auto", textAlign: "center", color: "white" }}>
          <Typography variant="body2" color="inherit">
            Check the project on{" "}
            <a href="https://github.com/aviralsharma07/nua" style={{ color: "yellow" }}>
              GitHub
            </a>
            .
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
