import React, { useContext } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { FirebaseContext } from "./context/Firebase";

import Tab from "./components/tab/Tab";

function App() {
  const { user } = useContext(FirebaseContext);

  return <div className="App">{user ? <Dashboard /> : <Tab />}</div>;
}

export default App;
