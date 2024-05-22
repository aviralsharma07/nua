// import React, { useState, useContext } from "react";
// import { FirebaseContext } from "../../context/Firebase";

// const SignUp = () => {
//   const { signUp } = useContext(FirebaseContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     await signUp(email, password);
//   };

//   return (
//     <form onSubmit={handleSignUp}>
//       <h2>Sign Up</h2>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUp;

import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../context/Firebase";
import { Button, TextField, Typography, Container, Box } from "@mui/material";

const SignUp = () => {
  const { signUp } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    await signUp(email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
