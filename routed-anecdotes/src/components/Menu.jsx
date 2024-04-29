import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AnecdoteList from "./AnecdoteList";
import CreateNew from "./CreateNew";
import About from "./About";
import Login from "./Login";
import Users from "./Users";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../reducers/userReducer";
import { useEffect } from "react";
import { arrangeNotification } from "../reducers/notificationReducer";

const Menu = ({ addNew, addNotification }) => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state.anecdote)
  const user = useSelector((state) => state.user)

  const padding = {
    paddingRight: 5,
  };

  const out = () => {
    dispatch(logOut())
    dispatch(arrangeNotification('Logged out!', 5000))
  }
  
  useEffect(() => {
    if (user.user) {
      dispatch(arrangeNotification(`Logged as ${user.user}`, 5000))
    }
  }, [user])
  
  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          anecdotes
        </Link>
        { user.user && <Link style={padding} to="/create">create new</Link> }
        <Link style={padding} to="/users">users</Link>
        <Link style={padding} to="/about">about</Link>
        { user.user && <button onClick={out}>logout</button> }
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
        <Route path="/users/:user" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {!user?.user && <Login />}
    </Router>
  );
};

export default Menu;
