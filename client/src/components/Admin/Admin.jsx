import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
function Admin() {
  const navigate = useNavigate();
  const [token, setToken] = React.useState(null);
  useEffect(() => {
    if (Cookies.get("jwt")) {
      console.log(Cookies.get("jwt"));
      setToken(Cookies.get("jwt"));
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [token]);
  return (
    <div>
      <Header sectionn={true} />
      {token ? <Dashboard token={token} /> : <Login setToken={setToken} />}
    </div>
  );
}

export default Admin;
