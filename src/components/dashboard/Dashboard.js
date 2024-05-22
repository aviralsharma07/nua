import React, { useState } from "react";
import Table from "../table/Table";
import { AppBar, Toolbar, Typography, Box, TextField, Avatar } from "@mui/material";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <TextField variant="outlined" size="small" placeholder="Search by author" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} sx={{ backgroundColor: "white", borderRadius: 1, marginRight: 2 }} />
          <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
          <Typography variant="body1" component="div" sx={{ marginLeft: 2 }}>
            Hello, User!
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: 2 }}>
        <Table searchQuery={searchQuery} />
      </Box>
      <footer style={{ textAlign: "center", padding: "10px", marginTop: "20px" }}>
        <Typography variant="body2">
          Crafted by Aviral. Check the project on <a href="https://github.com/your-repo-link">GitHub</a>.
        </Typography>
      </footer>
    </div>
  );
};

export default Dashboard;
