import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/auth/Signup";
import { useEffect, useState } from "react";
import Login from "./components/auth/Signin";
function App() {
  const [token, setToken] = useState(false);
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(!!storedToken);
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            <>
              {" "}
              <Navbar token={token} />
              <TodoForm token={token} />
              <TodoList />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
