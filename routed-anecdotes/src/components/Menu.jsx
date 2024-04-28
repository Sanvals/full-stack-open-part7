import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AnecdoteList from "./AnecdoteList";
import CreateNew from "./CreateNew";
import About from "./About";
import Login from "./Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../reducers/userReducer";

const Menu = ({ addNew, addNotification }) => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state.anecdote)
  const user = useSelector((state) => state.user)

  const padding = {
    paddingRight: 5,
  };

  const out = () => {
    dispatch(logOut())
  }
  
  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          anecdotes
        </Link>
        { user && <Link style={padding} to="/create">create new</Link>}
        <Link style={padding} to="/about">about</Link>
      </div>
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/:id" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route
          path="/create"
          element={
            <CreateNew addNew={addNew} addNotification={addNotification} />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      {!user && <Login />}
      {user && <button onClick={out}>logout</button>}
    </Router>
  );
};

export default Menu;
