import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/auth/Signup";
import Login from "./components/auth/login";
function App() {
  const token = !!localStorage.getItem("token") || false;

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
