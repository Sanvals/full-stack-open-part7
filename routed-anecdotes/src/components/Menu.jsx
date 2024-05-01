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
import { AppBar, Toolbar, Button } from "@mui/material";

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
    <>
    <Router>  
      <AppBar position = "static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">anecdotes</Button>
            { 
              user.user && 
              <Button color="inherit" component={Link} to="/create">create new</Button>
            }
            <Button color="inherit" component={Link} to="/users">users</Button>
            <Button color="inherit" component={Link} to="/about">about</Button>
            {
              user.user &&
                <Button color="inherit" onClick={out}>logout</Button>
            }
        </Toolbar>
      </AppBar>
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
    </Router>
      {!user?.user && <Login />}
    </>
  );
};

export default Menu;
